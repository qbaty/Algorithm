function confirmEnding(str, target) {
  var subStr = str.substr(-target.length);
  return (subStr === target);
}

confirmEnding("Bastian", "n");