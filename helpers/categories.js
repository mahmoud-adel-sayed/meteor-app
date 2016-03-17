Meteor.methods({
  addCat: function(catN , order , catDesc , image){
    if(checkIfAdmin(this.userId)){
      Categories.insert({name: catN , order: order , description: catDesc , image: image});
    }
  },
  deleteCat: function(id ,image){
    if(checkIfAdmin(this.userId)){
      Categories.remove(id);
      CatImages.remove(image);
    }
  },
  editCat: function(id , catN , order , catDesc , image , oldImage){
    if(checkIfAdmin(this.userId)){
      CatImages.remove(oldImage);
      Categories.update(id , { $set:{name:catN , order:order , description:catDesc , image:image} });
    }
  },
  removeAllCats: function(){
    if(checkIfAdmin(this.userId)){
      Categories.remove({});
      CatImages.remove({});
    }
  }
});
