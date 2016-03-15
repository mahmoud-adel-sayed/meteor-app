Template.categories.helpers({
	allCats: function(){
		return Categories.find();
	},
	getImage: function(){
		return CatImages.findOne({_id: this.image});
	}
});

Template.categories.events({
	"click .deleteCat": function(){
		Meteor.call("deleteCat",this._id,this.image);
	},
	"click #delete-all": function(){
		var remove = confirm("Do you want to delete all categories ?");
		if(remove){
			Meteor.call("removeAllCats");
		}
	}
});