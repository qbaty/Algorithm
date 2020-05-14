function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
    } 
  
  var lcm = range[0];
  for (var i = 1; i<range.length; i++){
    lcm = range[i]*lcm / gcd(lcm,range[i]);
  }
  return lcm; 
}

function gcd(a,b){
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}



smallestCommons([1, 5]);