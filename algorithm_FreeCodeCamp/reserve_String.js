// function reverseString(str) {
//   var result = [];
//   var rev_str = str.split("");
//   for (var i=rev_str.length-1; i>=0; i--){
//     result.push(rev_str[i]);
//   }
//   return result.join("");
// }

function reverseString(str) {
  var result = [];
  var rev_str = str.split("");
  return rev_str.reverse().join("");
}

reverseString("hello");
