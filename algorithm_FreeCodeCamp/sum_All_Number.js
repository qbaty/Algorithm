function sumAll(arr) {
  var f = arr[0];
  var e = arr[1];
  return (f+e)*(Math.abs(f-e)+1)/2;
}

sumAll([1, 4]);
