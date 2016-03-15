Router.route('/',function(){
	this.render('index');
},{name: 'index' , loadingTemplate: "load" , waitOn: function(){ return Meteor.subscribe('products') } });

Router.route('/contact-us',function(){
	this.render('contactUs');
},{name: 'contactUs'});

Router.route('/sign-up',function(){
	this.render('signUp');
},{name: 'signUp'});

Router.route('/sign-in',function(){
	this.render('signIn');
},{name: 'signIn'});

Router.route('/categories',function(){
  this.render('siteCategories');
},{name: 'siteCategories'});

Router.route('/article/:route',function(){
	this.render('article',{
		data: function(){
			return Pages.findOne({route: this.params.route});
		}
	});
},{ onAfterAction: function(){ document.title = this.params.route; } });

Router.route('/category/:_id',function(){
  this.render('siteProducts',{
    data: function(){
       templateData = { allPros : Products.find({category: this.params._id}, { sort: {order: 1} } ) };
       return templateData;
    }
  });
},{ waitOn: function(){ return Meteor.subscribe('products') } });

Router.route('/category/products/:_id',function(){
  this.render('siteProductDetails',{
    data: function(){
      return Products.findOne({_id: this.params._id});
    }
  });
},{ waitOn: function(){ return [Meteor.subscribe('products') , Meteor.subscribe('cart')] } });

Router.route('/cart',function(){
  this.render('cart');
},{name: 'cart' ,
  onBeforeAction: function(){
    if(!Meteor.userId()){
     this.redirect('signIn');
     Session.set('notLoggedIn', 'You have to sign in to add products to cart');
    }else{
      this.next();
    }
  },
  waitOn: function(){
    return [
      Meteor.subscribe('cart'),
      Meteor.subscribe('products')
    ]
  }
});
