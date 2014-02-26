/**
 * Write a function for retrieving the total 
 * number of substring palindromes.
 * For example the input is 'abba' 
 * then the possible palindromes= a, b, b, a, bb, abba 
 * So the result is 6.
 **/
 
function isSymmetry(str){
	var n = 0, l = str.length; m = Math.ceil(l/2);
	for(n; n < m; n++){
		if(str.charAt(n) == str.charAt(l-n-1)){
			continue;
		}else{
			return false;
		}
	}
	return true;
}

function palindromes(str){
	var l = str.length;
	var result = [];
	for(var i = 0; i < l; i++){
		for(var j = l-i-1; j > 0; j--){
			if(isSymmetry(str.substr(i, j+1))){
				result.push(str.substr(i, j+1));
			}
		}
	}
	return result;
}

console.log(palindromes('adadcadww'));
