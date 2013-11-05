/**
 * Write a function for retrieving the total 
 * number of substring palindromes.
 * For example the input is 'abba' 
 * then the possible palindromes= a, b, b, a, bb, abba 
 * So the result is 6.
 **/

function palindromes(str){
	var l = str.length;
	var result = [];
	for(var i = 0; i < l; i++){
		for(var j = 0; j < l-i-1; j++){
			if(str.charAt(j) == str.charAt(j + i)){
				result.push(str.substr(j, i+1));
			}
		}
	}
	return result;
}

console.log(palindromes('adadcadww'));