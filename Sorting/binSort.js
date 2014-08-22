/*
* give arr = [13, 4, 1, 6, 5, 3]
* invoke mergeSort(arr)
* get sorted [1, 3, 4, 5, 6, 13]
* http://init-life.com/javascript/2013/11/06/divide-merge-sort/
*/

function merge(left,right){
   var result = [];
   //循环比较两个数组的第一项，将较小的删除并push到result[],直到剩下只剩left或者right(极大值)
   while (left.length >0 && right.length >0){
      if(left[0] < right[0]){
          result.push(left.shift())
      } else {
          result.push(right.shift())
      }
   }
   return result.concat(left).concat(right)
 }

 function mergeSort(items){
     if(items.length ==1){
        return items;
     }
     var temp=[];
     for(var i=0,len=items.length;i<len;i++){
        temp.push([items[i]]);
     }

    //倒序合并，merge()每次传入的是两参数为单值＋有序数组
     for(var j=len-2;j+1;j--){
        temp[j] = merge(temp[j],temp[j+1]);
      }
     return temp[0];
}