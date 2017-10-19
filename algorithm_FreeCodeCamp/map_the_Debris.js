function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function(el){
    return {name:el.name,
            orbitalPeriod:Math.round((2*Math.PI)*Math.sqrt(Math.pow(earthRadius+el.avgAlt,3)/GM))
    };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
