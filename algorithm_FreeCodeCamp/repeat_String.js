function repeatStringNumTimes(str, num) {
  result = "";
  for(i=0 ; i<num ; i++){
   result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);