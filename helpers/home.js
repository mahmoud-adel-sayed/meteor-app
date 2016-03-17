Meteor.methods({
  editSection: function(id , title , description){
    if(checkIfAdmin(this.userId)){
      Sections.update(id , {$set: {title: title , description: description} });
    }
  },
  removeSlide: function(id){
    if(checkIfAdmin(this.userId)){
      Slider.remove(id);
    }
  }
});
