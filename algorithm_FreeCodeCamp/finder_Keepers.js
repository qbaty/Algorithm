function findElement(arr, func) {
   filterArr = arr.filter(func);
    
  return filterArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
