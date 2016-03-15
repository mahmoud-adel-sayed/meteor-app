Template.products.helpers({
	allPros: function(){
		return Products.find();
	},
	image: function(){
		return ProImages.findOne({_id: this.image});
	},
	category: function(){
		return Categories.findOne({_id: this.category});
	}
});

Template.products.events({
	'click .deletePro': function(){
		Meteor.call('deletePro',this._id,this.image);
	},
	'click #delete-all': function(){
		var remove = confirm('Do you want to delete all products ?');
		if(remove){
			Meteor.call('removeAllPros');
		}
	}
});