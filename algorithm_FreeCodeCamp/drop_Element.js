function dropElements(arr, func) {
  var len = arr.length;
  for(var num = 0; num < len; num++){
    if(func(arr[0])){
      break;
    }else{
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
