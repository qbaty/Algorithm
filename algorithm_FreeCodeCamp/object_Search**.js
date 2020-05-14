function whatIsInAName(collection, source) {

  var srcKeys = Object.keys(source);
  return collection.filter(function(obj){
    for (var n in srcKeys){
      if(!obj.hasOwnProperty(srcKeys[n])||obj[srcKeys[n]]!=source[srcKeys[n]]){
          return false;
         }
       }
     return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
