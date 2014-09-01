/**
 *	Givin n, find how many different ways you can take steps to reach the top 
 *  E.g. 
 *	findSteps(4) 
 *	1,1,1,1 
 *	1,1,2, 
 *	2,2 
 *	1,3, 
 *	4 
 *	this would return 5
**/

function countSteps(n){
	var counts = 0;
	function partition(arr, last ,m){
		var tempArr;
		if(m > 1){
			for(var i = last || 1; i <= m/2; i++){
				tempArr = arr.slice(0);
				if(m - i >= i){
					tempArr.push(i);
					
					if(m - i > 1){
						partition(tempArr.slice(0), i, m - i);
					}

					tempArr.push(m - i);
					results.push(tempArr);
				} else {
					return;
				}
			}
		}else{
			tempArr = arr.slice(0);
			tempArr.push(m);

			results.push(tempArr);
		}
	}
	partition([], null, n);
	results.push([n]);
	console.log(results.length, results);
	return counts;
}