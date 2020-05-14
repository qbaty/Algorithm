function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i =0; i<arr2.length; i++){
    if(arr1.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
    }
  }
  
  for(var j =0; j<arr1.length; j++){
    if(arr2.indexOf(arr1[j]) === -1){
      newArr.push(arr1[j]);
    }
  }
  
   return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);