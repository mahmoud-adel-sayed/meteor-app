Meteor.methods({
  addPro: function(proN , order , price , proDesc , catId , image , specifics , date){
    if(checkIfAdmin(this.userId)){
      Products.insert({name: proN , order: order , price: price , description: proDesc , category: catId , image: image , specifics: specifics, createdAt: date});
    }
  },
  deletePro: function(id , image){
    if(checkIfAdmin(this.userId)){
      Products.remove(id);
      ProImages.remove(image);
    }
  },
  editPro: function(id , proN , order , price , proDesc , catId , image , oldImage , specifics){
    if(checkIfAdmin(this.userId)){
      ProImages.remove(oldImage);
      Products.update(id , { $set:{name:proN , order:order , price:price , description:proDesc , category:catId , image:image , specifics:specifics} });
    }
  },
  removeAllPros: function(){
    if(checkIfAdmin(this.userId)){
      Products.remove({});
      ProImages.remove({});
    }
  }
});
