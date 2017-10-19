function mutation(arr) {
  var newArr = arr[1].toLowerCase().split("");
  for (var i=0 ; i< arr[1].length; i++){
    if (arr[0].toLowerCase().indexOf(newArr[i]) == -1){
      return false;
    } 
  }
  return true;
}  
mutation(["floor", "for"]);