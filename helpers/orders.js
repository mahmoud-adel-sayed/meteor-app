Meteor.methods({
  addOrder: function(user , items , name , address , phone ){
    var date = new Date();
    Orders.insert({user:user , items:items , name:name , address:address , phone:phone , date:date});
  },
  removeOrder: function(id){
    if(checkIfAdmin(this.userId)){
      Orders.remove(id);
    }
  },
  removeAllOrders: function(){
    if(checkIfAdmin(this.userId)){
      Orders.remove({});
    }
  }
});
