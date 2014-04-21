/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, 
 * the maximum total from top to bottom is 23.
 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 * That is, 3 + 7 + 4 + 9 = 23.
 * Find the maximum total from top to bottom in Arr;
**/
function eulerProblems(arr){
	for(var i = arr.length - 2; i >= 0; i--){
		for(var j = 0; j <= i; j++){
			arr[i][j] += arr[i+1][j] > arr[i+1][j+1] ? arr[i+1][j] : arr[i+1][j+1];
		}
	}
	return arr[0][0];
}