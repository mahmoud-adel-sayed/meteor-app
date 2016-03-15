Template.editCategory.onCreated(function(){
	Session.set('errors' , '');
	image = "";
	progress = 0;
	Meteor.setTimeout(function(){
		$('progress').val(progress);
	});
});

Template.editCategory.helpers({
	errors: function(){
		return Session.get('errors');
	}
});

Template.editCategory.events({
	"click #cancel": function(){
		if(image){
			CatImages.remove(image);
			Router.go("categories");
		}else{
			Router.go("categories");
		}
	},
	"submit #edit-category": function(event){
		event.preventDefault();
		var name = event.target.catN.value;
		var order = event.target.order.value;
		var description = event.target.catDesc.value;
		var old_image = this.image;
		if(!image){
			image = this.image;
			old_image = "";
		}
		Meteor.call("editCat",this._id,name,order,description,image,old_image,function(error){
			if(error){
				Session.set('errors', error.reason);
			}else{
				$(".order , .catN").val("");
				sAlert.success("Category edited successfully");
				Router.go("categories");
			}
		});
	},
	"change .catImage": function(event){
		FS.Utility.eachFile(event,function(file){
			CatImages.insert(file,function(err,obj){
				if(!err){
					image = obj._id;
				}
			});
		});
	}
});