function palindrome(str) {
  // Good luck!
  // var newStr = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  // var checkNum = newStr.length/2;
  // var checkStr ="";
  // var oriStr ="";

  // if(newStr.length%2==0){
  //   checkStr = newStr.slice(checkNum).split("").reverse().join("");
  //   oriStr = newStr.slice(0,checkNum).split("").join("");
  //   return (checkStr === oriStr);
  // } else{
  //   checkStr = newStr.slice(checkNum+0.5).split("").reverse().join("");
  //   oriStr = newStr.slice(0,checkNum-0.5).split("").join("");
  //   return (checkStr === oriStr);
  // }

  var newStr = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  var revStr = newStr.split("").reverse().join("");
  return (revStr === newStr);
  
}


palindrome("never odd or even");
