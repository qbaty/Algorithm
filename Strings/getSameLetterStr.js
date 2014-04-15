/**
 * Write a function for get all letter collection
 * Given ['adc', 'cda', 'anc', 'cn', 'acn']
 * Result :
 * {
 *    'adc' : ['adc', cda],
 *	  'anc' : ['anc', 'acn'],
 *    'cn'  : ['cn']
 * }
 **/
function getSameLetterStr(arr){
	var i = 0;
	var map = {};
	for(i; i<arr.length; i++){
		var str = arr[i].split('').sort().join('');
		if(str in map){
			map[str].push(arr[i]);
		}else{
			map[str] = [arr[i]];
		}
	}

	var result = [];
	for(var a in map){
		result.push(map[a]);
	}
	return result;
}