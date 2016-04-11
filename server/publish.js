Meteor.publish(null, function (){
  return Meteor.roles.find();
});

Meteor.publish('users', function (){
  var admin = this.userId;
  if(Roles.userIsInRole(admin , ['admin'])){
    return Meteor.users.find({} , {fields: {password: 0} });
  }
});

Meteor.publish('pages', function(){
    return Pages.find();
});

Meteor.publish('categories',function(){
    return Categories.find();
});

Meteor.publish('products',function(){
    return Products.find();
});

Meteor.publish('sections' , function(){
    return Sections.find();
});

Meteor.publish('catImages', function(){
    return CatImages.find();
});

Meteor.publish('proImages', function(){
    return ProImages.find();
});

Meteor.publish('slider' , function(){
    return Slider.find();
});

Meteor.publish("cart" , function(){
  var user = this.userId;
  return Cart.find({user:user});
});

Meteor.publish("orders" , function(){
  return Orders.find();
});

Meteor.publish("order" , function(id){
  return Orders.find({_id: id});
});

Meteor.publish('user', function (id){
  var admin = this.userId;
  if(Roles.userIsInRole(admin , ['admin'])){
    return Meteor.users.find({_id: id});
  }
});
