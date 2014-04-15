/**
 * Write a function for retrieving 
 * longest substring palindromes.
 * For example the input is 'adabbazc' 
 * then the possible palindromes= abba 
 * the manacher's algorithm javascript version
 **/
function palindromes(str){
	var newStr = '$#' + str.split('').join('#') + '#';
	var len = newStr.length;
	var p = [], id, mx = 0;
	var resultArr = [];
	var temp;

	for(var i = 1; i < len; i++){
		if(mx > i){
			p[i] = Math.min(p[2*id-i], mx - i);
		}else{
			p[i] = 1;
		}

		for(;newStr[i-p[i]] == newStr[i+p[i]];p[i]++){
			temp = newStr.substr(i+1-p[i],p[i]*2-1).replace(/\#/gi, '');
			if(temp && resultArr.indexOf(temp) != -1){
				resultArr.push(temp);
			}
		}
		if(p[i] + i > mx){
			id = i;
			mx = i + p[i];
		}
	}
	console.log(resultArr);

	return resultArr;
}