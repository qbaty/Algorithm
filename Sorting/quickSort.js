/*
* http://init-life.com/programing/2013/11/19/quicksort
*/

function quickSort(items){
   var len = items.length;
   var flag = true;
   for(var i = 0;i<len;i++){
      if(items[i]!=items[0]){
         flag=false;
       }
    }
   if (len == 1 || flag){
      return items;
    };
   var left=[],right=[],pivot = (items[0]+items[1])/2;
   for(var i=0;i<len;i++){
       if(compare(items[i],pivot)){
           right.push(items[i]);
       }else{
           left.push(items[i]);
       }
   }
   return merge(quickSort(left),quickSort(right));
}

function merge(left,right){
    return left.concat(right);
}
function compare(a,b){
    if(a<b) return false;
    else return true;
}