
function pairwise(arr, arg) {
   var sum = 0;
   for (var j=0;j<arr.length;j++) {
     for (var i=j+1; i<arr.length;++i) {
         if(arr[i] + arr[j] == arg) {
           sum += i + j;
           arr[i] = 'a';
           arr[j] = 'b';
         }
       }
     }
  
return sum;
}


pairwise([0, 0, 0, 0, 1, 1], 1);


