
function updateInventory(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      var foundMatch = false;
      // use each arr2's property to test if it's also on arr1
      for (var j = 0; j < arr1.length; j ++) {
        // if yes, add the value
      if (arr1[j][1].indexOf(arr2[i][1]) !== -1) {
        arr1[j][0] += arr2[i][0];
           foundMatch = true;
        } 
      }
      // end of testing, the one didn't be found need to be push into arr1
      if(foundMatch == false){
            arr1.push(arr2[i]);
        }
      
  }
  return sortArr(arr1);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];



function sortArr(arr){
  return arr.sort(function(a,b){
    if(a[1]>b[1]){
      return 1;
    } else {
      return -1;
    }
    
  });
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
