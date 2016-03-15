Template.newPage.onCreated(function(){
	Session.set("errors" , "");
});

Template.newPage.helpers({
	errors: function(){
		return Session.get("errors");
	}
});

Template.newPage.events({
	"submit #new-page": function(event){
		event.preventDefault();

		var page_name = event.target.pageN.value;
		var route_name = event.target.routeN.value;
		var order = event.target.order.value;
		var page_description = event.target.pageDesc.value;

		Meteor.call('addPage', page_name , route_name , order , page_description , function(error){
			if(error){
				Session.set("errors", error.reason);
			}else{
				$(".description , .pageN , .routeN , .order").val("");
				sAlert.success('Page saved successfully');
				Router.go('pages');
			}
		});
	},
	'click #cancel': function(){
		Router.go('pages');
	}
});