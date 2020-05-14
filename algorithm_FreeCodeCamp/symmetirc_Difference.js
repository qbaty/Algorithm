
function sym(args) {
  var arr= Array.from(arguments);
  arr = arr.reduce(function(a,b){
    var aNotB = a.filter(function(val){
      return !b.includes(val);
    });
    
    var bNotA = b.filter(function(val){
      return !a.includes(val);

    });
    return aNotB.concat(bNotA);
  });
  
  return arr.filter(function (el, i, arr) {
	return arr.indexOf(el) === i;
});

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
