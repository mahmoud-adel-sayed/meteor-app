
Template.orders.helpers({
	orders: function(){
		return Orders.find();
	},
	userEmail: function(){
		return Meteor.users.findOne({_id: this.user});
	}
});

Template.orders.events({
	"click .delete": function(){
		var delete_order = confirm("Are you sure you want to delete this order ?");
		if(delete_order){
			Meteor.call("removeOrder" , this._id);
		}
	},
	"click #delete-all": function(){
		var delete_all = confirm("Are you sure you want to delete all orders ?");
		if(delete_all){
			Meteor.call("removeAllOrders");
		}
	}
});
