Template.editPage.onCreated(function(){
	Session.set('errors', '');
});

Template.editPage.helpers({
	errors: function(){
		return  Session.get('errors');
	}
});

Template.editPage.events({
	'submit #edit-page': function(event){
		event.preventDefault();

		var page = event.target.pageN.value;
		var route = event.target.routeN.value;
		var order = event.target.order.value;
		var description = event.target.pageDesc.value;

		Meteor.call('editPage',this._id,page,route,order,description,function(error){
			if(error){
				Session.set('errors',error.reason);
			}else{
				$('.pageN , .routeN , .order').val('');
				sAlert.success('Page Edited successfully');
				Router.go('pages');
			}
		});

	},
	'click #cancel': function(){
		Router.go('pages');
	}
});