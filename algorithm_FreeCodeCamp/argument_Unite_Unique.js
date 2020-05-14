function uniteUnique(arr) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  console.log(finalArray)
  ;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
