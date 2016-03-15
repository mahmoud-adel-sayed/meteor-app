Iron.Router.hooks.checkAdmin = function(){
	var admin = Meteor.user();
  	if (!Roles.userIsInRole(admin , ['admin'] )) {
	    this.redirect('admin');
	  } else {
	    this.next();
	  }
};

Router.onBeforeAction("checkAdmin",{
	only: ['dashboard','pages','newPage','editPage','categories','newCategory','editCategory','products','newProduct','editProduct',
	'allCustomers','orders','settings','tools','users','editHome','userOrder']
});

//log in
Router.route("/admin",function(){
	this.render("adminLogIn");
},{layoutTemplate: "admin" , loadingTemplate: "load" });

Router.route("/admin/dashboard",{
  layoutTemplate: "adminLayout",
  name: "dashboard"
});

//Pages Management
Router.route("/admin/edit-home",{
  layoutTemplate: "adminLayout",
  name: "editHome"
});

Router.route("/admin/edit-page/:_id", function(){
  this.render("editPage",{
    data: function(){
      return Pages.findOne({_id: this.params._id});
    }
  });
},{
  layoutTemplate: "adminLayout",
  name: "editPage"
});

Router.route("/admin/pages",{
  layoutTemplate: "adminLayout",
  name: "pages"
});

Router.route("/admin/new-page",{
  layoutTemplate: "adminLayout",
  name: "newPage"
});

//Store Management
Router.route("/admin/edit-category/:_id",function(){
  this.render("editCategory",{
    data: function(){
      return Categories.findOne({_id: this.params._id});
    }
  });
},{
  layoutTemplate: "adminLayout",
  name: "editCategory"
});

Router.route("/admin/edit-product/:_id",function(){
  this.render("editProduct",{
      data: function(){
          return Products.findOne({_id: this.params._id});
      }
  });
},{
  layoutTemplate: "adminLayout",
  name: "editProduct",
  waitOn: function(){ return Meteor.subscribe('products') }
});

Router.route("/admin/categories",{
  layoutTemplate: "adminLayout",
  name: "categories"
});

Router.route('/admin/new-category',{
  layoutTemplate: 'adminLayout',
  name: 'newCategory'
});

Router.route("/admin/products",{
  layoutTemplate: "adminLayout",
  name: "products",
  waitOn: function(){ return Meteor.subscribe('products') }
});

Router.route("/admin/new-product",{
  layoutTemplate: "adminLayout",
  name: "newProduct",
  waitOn: function(){ return Meteor.subscribe('products') }
});

//Customers
Router.route("/admin/all-customers",{
  layoutTemplate: "adminLayout",
  name: "allCustomers",
  waitOn: function(){ return Meteor.subscribe("users") }
});

Router.route("/admin/orders",{
  layoutTemplate: "adminLayout",
  name: "orders",
  waitOn: function(){
    return [
      Meteor.subscribe("orders"),
      Meteor.subscribe("users")
    ]
  }
});

Router.route('/admin/user-order/:_id', function(){
  this.render('userOrder',{
    data: function(){
      return Orders.findOne({_id: this.params._id});
    }
  });
},{name: 'userOrder' , layoutTemplate: 'adminLayout' , waitOn: function(){ return Meteor.subscribe("order" , this.params._id ) } });

//System
Router.route("/admin/settings",{
  layoutTemplate: "adminLayout",
  name: "settings"
});

Router.route("/admin/tools",{
  layoutTemplate: "adminLayout",
  name: "tools"
});

Router.route("/admin/users",{
  layoutTemplate: "adminLayout",
  name: "users"
});
