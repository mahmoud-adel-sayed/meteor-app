Template.siteProducts.onCreated(function(){
    document.title = 'Products';
    Session.set('currentRoute', Router.current().route.getName());
});

Template.siteProducts.helpers({
	image: function(){
		return ProImages.findOne({_id: this.image});
	}
});
