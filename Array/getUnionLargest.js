/**
 * given two arr contain only numbers
 * try to find out the kth greatest common factor
 * var arrA = [1, 3, 6, 12, 24, 34, 88, 102]
 * var arrB = [2, 6, 2, 4, 24, 45, 88, 123]
 * getUnionLargest(arrA, arrB, n);
**/
function getUnionLargest(arrA, arrB, n){
	var c = 0, iA = 0, iB = 0;
	var temp;
	arrA.sort(function(a,b){return b-a});
	arrB.sort(function(a,b){return b-a});
	while(c != n){
		if(!arrB[iB] || arrA[iA] > arrB[iB]){
			temp = arrA[iA];
			iA++;
		}else if(!arrA[iA] || arrB[iB] > arrA[iA]){
			temp = arrB[iB];
			iB++;
		}else{
			temp = arrA[iA];
			iA++;
			iB++;
		}
		c++;
	}
	return temp;
}