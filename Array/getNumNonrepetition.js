/**
 * given a arr
 * try find out the greatest nonrepertition area in arr
 * var arr = [1, 2, 3, 1, 2, 'a', 'b', 'x', 'z', 9];
 * getNumNonrepetition(arr) == [3, 1, 2, 'a', 'b', 'x', 'z', 9]
 **/
function getNumNonrepetition(arr){
	var index = {};
	var start = 0;
	var end = arr.length;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] in index){
			
			index[arr[i]].push(i);
		}else{
			index[arr[i]] = [i];
		}
	}
	console.log(index);
}