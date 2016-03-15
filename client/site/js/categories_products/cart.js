
Template.cart.onCreated(function(){
    document.title = 'cart';
    Session.set('currentRoute', Router.current().route.getName());

    this.show = new ReactiveVar('hide');
    this.errors = new ReactiveVar('');
    this.success = new ReactiveVar('');
});

Template.cart.helpers({
	items: function(){
		return Cart.find();
	},
	product: function(){
		return Products.findOne({_id: this.item});
	},
	image: function(){
		return ProImages.findOne({_id: this.image});
	},
	subtotal: function(){
		return this.price * this.quantity;
	},
	show: function(){
		return Template.instance().show.get();
	},
	errors: function(){
		return Template.instance().errors.get();
	},
	success: function(){
		return Template.instance().success.get();
	}
});

Template.cart.events({
	"click .delete": function(){
		Meteor.call("RemoveCartItem",this._id);
	},
	"click .order-now": function(event , template){
		template.show.set('show');
	},
	"change .quantity": function(event){
		var cart_id = this._id;
		var qty = $("#"+cart_id).val();
		Meteor.call("updateCartItem" , cart_id , qty);
	},
	"submit .order-now-form": function(event , template){
		event.preventDefault();

		var user = Meteor.userId();
		var name = event.target.fullName.value;
		var address = event.target.address.value;
		var phone = event.target.phone.value;
    var items = [];
    var item = {};
    $(".cart_item").each(function(){
      var pro_name = $(this).find(".product_name span").text();
      var pro_quantity = $(this).find(".product_quantity input").val();
      var pro_price = $(this).find(".product_price span").text();

      item = { product_name:pro_name , product_quantity:pro_quantity , product_price:pro_price };
      items.push(item);
    });

		Meteor.call("addOrder", user,items,name,address,phone, function(err){
			if(err){
				template.errors.set(err.reason);
        template.success.set("");
			}else{
				template.errors.set("");
				template.success.set("your order has sent .");
        template.show.set('hide');
        $(".order-now-form .form-control").val("");
			}
		});

	}
});
