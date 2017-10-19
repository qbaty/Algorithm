function truncateString(str, num) {
  if(num<=3){
    return str.slice(0,num)+"...";
  } else if(num < str.length){
  return str.slice(0,num-3)+"...";
  } else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

