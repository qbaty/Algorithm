function bouncer(arr) {
  return arr.filter(function(num){
    return Boolean(num) == true;
  });
}

bouncer([7, "ate", "", false, 9]);
