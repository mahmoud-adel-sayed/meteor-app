Meteor.methods({
  addPage: function(pageN , routeN , order , pageDesc){
    if(checkIfAdmin(this.userId)){
      Pages.insert({page: pageN , route: routeN , order:order , description: pageDesc});
    }
  },
  deletePage: function(id){
    if(checkIfAdmin(this.userId)){
      Pages.remove(id);
    }
  },
  editPage: function(id , pageN , routeN , order , pageDesc){
    if(checkIfAdmin(this.userId)){
      Pages.update(id,{
        $set: {page: pageN , route: routeN , order:order , description: pageDesc}
      });
    }
  }
});
