
Template.userOrder.onRendered(function(){
	var sum = 0;
	var total = 0;
	$(".cart_item").each(function(){
		var pro_quantity = $(this).find(".product_quantity span").text();
		var pro_price = $(this).find(".product_price span").text();
		sum = pro_quantity * pro_price;
		total += sum;
	});
	$("#total").text(total);
});

Template.userOrder.helpers({
	userEmail: function(){
		return Meteor.users.findOne({_id: this.user});
	},
	subscribe: function(){
		return Meteor.subscribe("user", this.user);
	},
	subtotal: function(){
		return this.product_price * this.product_quantity;
	}
});
