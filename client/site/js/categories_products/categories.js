Template.siteCategories.onCreated(function(){
    document.title = 'Categories';
    Session.set('currentRoute', Router.current().route.getName());
});

Template.siteCategories.helpers({
	allCats: function(){
		return Categories.find({},{ sort: {order: 1} });
	},
	image: function(){
		return CatImages.findOne({_id: this.image});
	}
});