function sumPrimes(num) {
  var sum = 0;
  for(var n=2; n<=num; n++){
    if(isPrimes(n)){
      sum += n;
    }
  } 
  return sum;
} 



function isPrimes(num){
  if (num == 2){
    return true;
  }
  else{
    for (var i = 2; i<num; i++){
      if(num%i==0){
        return false;
      }
    } return true;
  }
}


sumPrimes(13);
