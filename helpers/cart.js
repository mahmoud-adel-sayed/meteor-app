Meteor.methods({ 
  addCartItem: function(user , item , qty , price){
    Cart.insert({user:user , item: item , quantity: qty , price: price});
  },
  RemoveCartItem: function(id){
    Cart.remove(id);
  },
  updateCartItem: function(id , qty){
    Cart.update(id , { $set:{quantity:qty} } );
  }
});
