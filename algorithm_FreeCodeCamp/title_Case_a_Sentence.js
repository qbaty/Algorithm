function titleCase(str) {
  var newStr =  str.toLowerCase().split(" ");
  result = [];
  for (var i=0; i<newStr.length; i++){
     Up = newStr[i][0].toUpperCase();
     result.push(Up + newStr[i].slice(1));
  }
  
  return result.join(" ");
}

titleCase("I'm a little tea pot");