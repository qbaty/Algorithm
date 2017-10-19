function findLongestWord(str) {
  
  arrStr = str.split(" ");
  for (var i=0;i<arrStr.length-1;i++){
    if(arrStr[i].length > arrStr[i+1].length){
      arrStr[i+1] = arrStr[i];
    }
  }
    return arrStr[arrStr.length-1].length;
    }

findLongestWord("The quick brown fox jumped over the lazy dog");

