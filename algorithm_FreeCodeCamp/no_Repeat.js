function permAlone(str) {
  var arr = str.split('');
  var result = 0; //counter
  
  function swap(a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  } // take two els swap position
function generate(n){
  var regex =/([a-z])\1+/;
  
  if( n === 1 && !regex.test(arr.join(""))){
    result += 1;
  } else{
    for (var i =0 ; i !== n; i++){
      generate( n -1 );
      swap(n % 2 ? 0 : i, n -1);
    }
  }
}
  generate(arr.length);
  return result;
}// function

permAlone('aab');
