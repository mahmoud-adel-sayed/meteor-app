
Template.site.helpers({
    allPages: function(){
    	return Pages.find({}, { sort:{order: 1} } );
    },
    isCurrentPage: function(pageName){
        return Session.equals('currentRoute', pageName);
    },
    userEmail: function(){
    	return Meteor.users.find();
    }
});

Template.site.events({
	'click #log_out': function(){
		Meteor.logout();
	}
});
