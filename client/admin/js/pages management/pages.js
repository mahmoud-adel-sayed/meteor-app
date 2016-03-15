Template.pages.helpers({
	allPages: function(){
		return Pages.find();
	}
});
Template.pages.events({
	'click .deletePage': function(){
		Meteor.call('deletePage', this._id);
	}
});