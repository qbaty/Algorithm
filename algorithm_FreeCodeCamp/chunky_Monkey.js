function chunkArrayInGroups(arr, size) {
  var result = []; 
  for ( var i=0; i< arr.length / size ; i++){
     result.push(arr.slice(size*i,size*(i+1)));
  }
  return result;
}  

chunkArrayInGroups([0, 1, 2, 3, 4], 3);
