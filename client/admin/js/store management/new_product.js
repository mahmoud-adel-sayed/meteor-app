Template.newProduct.onCreated(function(){
	Session.set('errors' , '');
	image = '';
	progress = 0;
	Meteor.setTimeout(function(){
		$('progress').val(progress);
	});
});

Template.newProduct.helpers({
	allCategories: function(){
		return Categories.find();
	},
	errors: function(){
		return Session.get('errors');
	}
});

Template.newProduct.events({
	'click #cancel': function(){
		if(image){
			ProImages.remove(image);
			Router.go('products');
		}else{
			Router.go('products');
		}
	},
	'click #add-spec':function(event){

		$('.specifications').append('<div class="col-md-12 record"><div class="col-md-6"><input class="form-control spec-name" placeholder="Name"></div><div class="col-md-6"><input class="form-control spec-value" placeholder="Value"></div></div>');

	},
	'submit #new-product': function(event){
		event.preventDefault();
		var name = event.target.proN.value;
		var order = event.target.order.value;
		var price = event.target.price.value;
		var description = event.target.proDesc.value;
		var categoryId = event.target.category.value;
		var specifics = new Array();
		var obj = {};
		var date = new Date();

		$('.specifications .record').each(function(index,value){
		   var names = $(this).find('.col-md-6 .spec-name').val();
		   var values = $(this).find('.col-md-6 .spec-value').val();
		   if(names && values){
		   	obj = {name: names , value:values};
		   	specifics.push(obj);
		   }
		});

		Meteor.call('addPro',name,order,price,description,categoryId,image,specifics,date,function(error){
			if(error){
				Session.set('errors', error.reason);
			}else{
				$(".price , .proN , .order").val("");
				sAlert.success('Product saved successfully');
				Router.go('products');
			}
		});

	},
	'change .proImage': function(event){
		FS.Utility.eachFile(event,function(file){
			ProImages.insert(file , function(err,obj){
				if(!err){
					image = obj._id;
				}
			});
		});
	}
});