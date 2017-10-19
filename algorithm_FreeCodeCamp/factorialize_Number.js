function factorialize(num) {
  var result = 1;
  for(var i=1;i<=num;i++){
    result *= i;
  }
  return result;
}

factorialize(5);