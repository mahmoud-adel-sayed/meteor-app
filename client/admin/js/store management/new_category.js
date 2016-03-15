Template.newCategory.onCreated(function(){
	Session.set('errors' , '');
	image = '';
	progress = 0;
	Meteor.setTimeout(function(){
		$('progress').val(progress);
	});
});

Template.newCategory.helpers({
	errors: function(){
		return Session.get('errors');
	}
});

Template.newCategory.events({
	'click #cancel': function(){
		if(image){
			CatImages.remove(image);
			Router.go('categories');
		}else{
			Router.go('categories');
		}
		
	},
	'submit #new-category': function(event){
		event.preventDefault();
		var name = event.target.catN.value;
		var order = event.target.order.value;
		var description = event.target.catDesc.value;

		Meteor.call('addCat',name,order,description,image,function(error){
			if(error){
				Session.set('errors', error.reason);
			}else{
				$('.order , .catN').val('');
				sAlert.success('Category saved successfully');
				Router.go('categories');
			}
		});
		
	},
	'change .catImage': function(event){
		FS.Utility.eachFile(event, function(file) {
	        CatImages.insert(file, function (err ,obj) {
	        	if(!err){
	        		image = obj._id;
	        	}
	        });
      	});
	}
});