Router.configure({
	layoutTemplate: "site",
	notFoundTemplate: "notFound",
  loadingTemplate: "load",
	waitOn: function(){
		return [
			Meteor.subscribe('catImages'),
      Meteor.subscribe('proImages'),
			Meteor.subscribe('pages'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('slider'),
      Meteor.subscribe('sections')
		];
	}
});
