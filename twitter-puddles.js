/**
 * twitter-puddle
 * In this picture we have walls of different heights. 
 * This picture is represented by an array of integers,
 * where the value at each index is the height of the wall. 
 * The picture above is represented with an array
 * as [2,5,1,2,3,4,7,7,6]."
 * Now imagine it rains. 
 * How much water is going to be 
 * accumulated in puddles between walls?"
**/
function puddle(arr){
	var l = arr.length;
	var max_l = idx_l = 0;
	var max_r = idx_r = l - 1;
	var sum = 0;

	while(idx_l < idx_r){
		if(arr[idx_l] < arr[idx_r]){
			idx_l = idx_l + 1;
			if(arr[idx_l] >= arr[max_l]){
				max_l = idx_l;
			}else{
				if(arr[max_r] >= arr[max_l]){
					sum = sum + (arr[max_l] - arr[idx_l]);
				}
			}
		}else{
			idx_r = idx_r - 1;
			if(arr[idx_r] >= arr[max_r]){
				max_r = idx_r;
			}else{
				if(arr[max_l] >= arr[max_r]){
					sum = sum + (arr[max_r] - arr[idx_r]);
				}
			}
		}
	}
	return sum;
}

console.log(puddle([1,2,3,2,3]));