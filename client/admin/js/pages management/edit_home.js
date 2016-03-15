Template.editHome.onCreated(function(){
	this.errors = new ReactiveVar("");
});

Template.editHome.helpers({
	allSlides: function(){
		return Slider.find();
	},
	sections: function(){
		return Sections.find({},{sort:{name:1}});
	},
	errors: function(){
		return Template.instance().errors.get();
	}
});

Template.editHome.events({
	"click #cancel": function(){
		Router.go("pages");
	},
	"click .edit-home-section": function(event , template){
		template.errors.set("");
	},
	"change .parteners-slider": function(event){
		FS.Utility.eachFile(event,function(file){
			Slider.insert(file,function(err,obj){

			});
		});
	},
	"click .remove-slide": function(){
		Meteor.call("removeSlide",this._id);
	},
	"submit .edit-section": function(event , template){
		event.preventDefault();
		var title = event.target.sectionN.value;
		var description = event.target.sectionDesc.value;

		Meteor.call("editSection" , this._id , title , description , function(error){
			if(error){
				template.errors.set(error.reason);
			}else{
				$(".modal").modal("hide");
				sAlert.success("Section edited successfully");
			}
		});
	}

});