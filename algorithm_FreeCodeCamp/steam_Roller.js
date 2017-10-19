var  valueArr=[];

function steamrollArray(arr){

  for(var i=0; i<arr.length ; i++){
      if(Array.isArray(arr[i])){
      result = arr[i];
      steamrollArray(result);
   }else{
     valueArr.push(arr[i]);
   }
  } 
  return valueArr;
}

steamrollArray([1, {}, [3, [[4]]]]);