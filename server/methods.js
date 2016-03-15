
Meteor.methods({
        sendEmail: function(to , from , subject , text){
            check([to, from, subject, text], [String]);
            this.unblock();

            Email.send({
                to: to,
                from: from,
                subject: subject,
                html: text
            });
        },

        // Home
        editSection: function(id , title , description){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Sections.update(id , {$set: {title: title , description: description} });
          }
        },
        removeSlide: function(id){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Slider.remove(id);
          }
        },

        // pages
        addPage: function(pageN , routeN , order , pageDesc){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Pages.insert({page: pageN , route: routeN , order:order , description: pageDesc});
          }
        },
        deletePage: function(id){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Pages.remove(id);
          }
        },
        editPage: function(id , pageN , routeN , order , pageDesc){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Pages.update(id,{
              $set: {page: pageN , route: routeN , order:order , description: pageDesc}
            });
          }
        },

        // categories
        addCat: function(catN , order , catDesc , image){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Categories.insert({name: catN , order: order , description: catDesc , image: image});
          }
        },
        deleteCat: function(id ,image){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Categories.remove(id);
            CatImages.remove(image);
          }
        },
        editCat: function(id , catN , order , catDesc , image , oldImage){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            CatImages.remove(oldImage);
            Categories.update(id , { $set:{name:catN , order:order , description:catDesc , image:image} });
          }
        },
        removeAllCats: function(){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Categories.remove({});
            CatImages.remove({});
          }
        },

        // products
        addPro: function(proN , order , price , proDesc , catId , image , specifics , date){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Products.insert({name: proN , order: order , price: price , description: proDesc , category: catId , image: image , specifics: specifics, createdAt: date});
          }
        },
        deletePro: function(id , image){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Products.remove(id);
            ProImages.remove(image);
          }
        },
        editPro: function(id , proN , order , price , proDesc , catId , image , oldImage , specifics){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            ProImages.remove(oldImage);
            Products.update(id , { $set:{name:proN , order:order , price:price , description:proDesc , category:catId , image:image , specifics:specifics} });
          }
        },
        removeAllPros: function(){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Products.remove({});
            ProImages.remove({});
          }
        },

        //Cart
        addCartItem: function(user , item , qty , price){
          Cart.insert({user:user , item: item , quantity: qty , price: price});
        },
        RemoveCartItem: function(id){
          Cart.remove(id);
        },
        updateCartItem: function(id , qty){
          Cart.update(id , { $set:{quantity:qty} } );
        },

        //Orders
        addOrder: function(user , items , name , address , phone ){
          var date = new Date();
          Orders.insert({user:user , items:items , name:name , address:address , phone:phone , date:date});
        },
        removeOrder: function(id){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Orders.remove(id);
          }
        },
        removeAllOrders: function(){
          if(Roles.userIsInRole(this.userId , ['admin'])){
            Orders.remove({});
          }
        }
});
