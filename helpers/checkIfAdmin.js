checkIfAdmin = function(userId){
  if(Roles.userIsInRole(userId , ['admin'])){
    return true;
  }else{
    return false;
  }
}
