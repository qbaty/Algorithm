/**
 * given two array contain only numbers
 * try to find out the kth greatest common factor
 * var arrA = [1, 3, 6, 12, 24, 34, 88, 102]
 * var arrB = [2, 6, 2, 4, 24, 45, 88, 123]
 * getIntersectionLargest(arrA, arrB, 1) == 88;
**/
function getIntersectionLargest(arrA, arrB, n){
	var c = 0, i = 0;
	var temp;
	arrA.sort(function(a,b){return b-a});
	arrB.sort(function(a,b){return b-a});
	while(c != n && i != arrA.length){
		if(arrB.indexOf(arrA[i]) != -1){
			temp = arrA[i];
			c++;
		}
		i++;
	}
	return (c == n) ? temp : undefined;
}
