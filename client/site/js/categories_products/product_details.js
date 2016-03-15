Template.siteProductDetails.onCreated(function(){
	Session.set('currentRoute', Router.current().route.getName());
	user = Meteor.userId();
});

Template.siteProductDetails.helpers({
	image: function(){
		return ProImages.findOne({_id: this.image});
	}
});

Template.siteProductDetails.events({
	'click #add-cart':function(){
		if(user){
			if( Cart.find({user: user , item: this._id}).count() > 0 ){
				$('#added-to-cart').text('');
				$('#already-in-cart').text('Item already exists in cart .');
			}else{
				Meteor.call('addCartItem' , user , this._id , 1 , this.price , function(err){
					if(err){
						var error = err.reason;
						alert(error);
					}else{
						$('#added-to-cart').text('Item successfully added to cart .');
					}
				});
			}
			
		}else{
			Router.go('signIn');
			Session.set('notLoggedIn' , 'You have to sign in to add items to cart .');
		}
	}
});