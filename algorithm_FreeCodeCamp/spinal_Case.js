function spinalCase(str) {
	str = str.replace(/[^a-zA-Z0-9-]|[a-z][A-Z]/g, function(word) {
    if (word.match(/[a-z][A-Z]/)) {
        return word[0] + "-" + word[1];
        } else {
        return "-";
        }
  });
  return str.replace(/[A-Z]/g, function(x){
    return x.toLowerCase();
  });
}


spinalCase('thisIsSpinalTap');