function myReplace(str, before, after) {
  
  if(before.charAt(0) == before.charAt(0).toUpperCase()){
      return str.replace(before,after.charAt(0).toUpperCase()+after.slice(1));
  }else{
     return str.replace(before,after);
  }

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
