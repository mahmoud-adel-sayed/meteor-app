Template.signIn.onCreated(function(){
    document.title = 'Sign In';
    Session.set('errors','');
    Session.set('currentRoute', Router.current().route.getName());
});

Template.signIn.onDestroyed(function(){
    Session.set('notLoggedIn' ,'');
});

Template.signIn.helpers({
    errors: function(){
       return Session.get("errors");
    },
    wishlist: function(){
        return Session.get("notLoggedIn");
    }
});

Template.signIn.events({
    "submit #sign-in": function(event){
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;

        if(!email){
            Session.set('errors','Email is Required');
        }else if(!password){
            Session.set('errors','Password is Required');
        }else{
             Meteor.loginWithPassword(email,password,function(error){
                if(error){
                    Session.set("errors", error.reason);
                }else{
                    Router.go("index");
                }
            });
        }
       
    }
});
