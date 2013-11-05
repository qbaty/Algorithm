/**
 * From a given input array, for each element, 
 * find next higher element present in each array.
 * for example {40,50,11,32,55,68,75} output 
 * should be {50,55,32,55,68,75,-1} 
 * for element if no higher element is present, print -1. 
 * complexity should be less than O(n^2) . 
 * you can use datastructure and no constraint on space complexity.
 *
**/

function outputNextHigherNumArr(arr){
	var result = [];
	var point;
	var i = 0;
	var diff = 1;
	while(result[result.length - 1] != -1){
		if(!arr[i+diff]){
			result.push(-1);
			break;
		}else {
			if(arr[i+diff] - arr[i] > 0){
				result.push(arr[i+diff]);
				i = i + 1;
				diff = 1
			}else{
				diff += 1;
			}
		}
	}
	return result
}

/**
 *  testcase
**/
console.log(outputNextHigherNumArr([40,50,11,32,55,68,75]));

