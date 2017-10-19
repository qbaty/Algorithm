function binaryAgent(str) {
  var wordArr = str.split(" ");
  var newWordArr = [];
  for (var i = 0; i < wordArr.length; i++){
    newWord = String.fromCharCode(readCode(wordArr[i]));
    newWordArr.push(newWord);
  }
  
  return newWordArr.join("");
}

function readCode(string){
  var newString = string.split("");
  var sum = 0;
  var count = newString.length-1; 
  var a = [];
  for(var i=0; i<newString.length; i++){
    sum += (newString[i]*(Math.pow(2,count)));
    count-=1;
  }
  return sum;
}
binaryAgent(("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));