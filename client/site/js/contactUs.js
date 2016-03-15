Template.contactUs.onCreated(function(){
    document.title = 'Contact Us';
    Session.set('currentRoute', Router.current().route.getName());
    this.errors = new ReactiveVar('');
});

Template.contactUs.helpers({
    errors: function(){
        return Template.instance().errors.get();
    }
});

Template.contactUs.events({
    'submit #contact-us':function(event , template){
        event.preventDefault();

        var fName = event.target.fName.value;
        var lName = event.target.lName.value;
        var name = fName + ' ' + lName;
        var from = event.target.email.value;
        var sub = event.target.subject.value;
        var message = event.target.message.value;

        if(!from){
            template.errors.set('<span class="text-danger">Email is Required</span>');
        }else if(!sub){
            template.errors.set('<span class="text-danger">Subject is Required</span>');
        }else if(!message){
            template.errors.set('<span class="text-danger">Message is Required</span>');
        }else{
            message = '<strong>Name : '+name+'</strong><p>' + message + '</p>';
            Meteor.call('sendEmail','mahmoudtaha939@gmail.com',from,sub,message,function(error){
                $('.email , .subject , .message').val('');
                if(error){
                    template.errors.set(error.reason);
                }else{
                    template.errors.set('<span class="text-success">message successfully sent .</span>');
                }
            });
        }


        
    }
});