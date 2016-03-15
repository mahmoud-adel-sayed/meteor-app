Template.adminLogIn.onCreated(function(){
	Session.set('errors','');
});

Template.adminLogIn.helpers({
    logged: function(){
    	var admin = Meteor.user();
		 if (Roles.userIsInRole(admin , ['admin'] )) {
			  Router.go("dashboard");
		 }
    },
    errors: function(){
    	return Session.get('errors');
    }
});

Template.adminLogIn.events({
	"submit #admin-login": function(event){
		event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
		
		if(!email){
			Session.set('errors','Email is required');
		}else if(!password){
			Session.set('errors','password is required');
		}else{
			Meteor.loginWithPassword(email,password,function(error){
	        	if(!error){
	        		var admin = Meteor.user();
				  	if (!Roles.userIsInRole(admin , ['admin'] )) {
					    this.redirect('admin');
					}else{
					    Router.go("dashboard");
					}
	        	}else{
	        		Session.set('errors','User does not exist');
	        	}
        	});
		}
			  
    }
});