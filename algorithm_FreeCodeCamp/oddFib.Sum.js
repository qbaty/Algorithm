
function sumFibs(num) {
  return sumOdd(giveFibs(num));
}

function giveFibs(num){
  fib=[1,1];
  for(var i=2; fib[i-2]+fib[i-1]<=num ; i++){
   fib.push(fib[i-1]+fib[i-2]);
 } 
  return fib;
}

function sumOdd(arr){
  var sum=0;
  for(var n in arr){
    if(arr[n]%2 !==0){
      sum += arr[n];
    }
  }
    return sum;
}

sumFibs(75025);