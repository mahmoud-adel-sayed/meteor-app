Template.signUp.onCreated(function(){
    document.title = 'Sign Up';
    Session.set('errors','');
    Session.set('currentRoute', Router.current().route.getName());
});

Template.signUp.helpers({
	errors: function(){
		return Session.get('errors');
	}
});

Template.signUp.events({
    "submit #sign-up": function(event){
    	event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var re_password = event.target.rePassword.value;

        if(re_password !== password){
        	Session.set('errors','repassword does not match password');
        }else{
        	Accounts.createUser({email:email,password:password},function(error){
	        	if(error){
	        		Session.set('errors', error.reason);
	        	}else{
                    Router.go('signIn');
                }
        	});
        }

    }
});