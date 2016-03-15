Template.allCustomers.helpers({
	allCustomers: function(){
		return Meteor.users.find({});
	}
});