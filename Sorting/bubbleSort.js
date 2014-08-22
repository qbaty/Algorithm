/*
* bubble-sort, the simplest sorting algorithm.
* give arr = [13, 4, 1, 6, 5, 3]
* invoke bubbleSort(arr)
* get sorted [1, 3, 4, 5, 6, 13]
* http://init-life.com/programing/2013/11/19/bubblesort
*/

function bubbleSort(arr){
   var len = arr.length;
   for(var i = 0;i<len-1;i++ ){
       for(var j = 0;j < len-1;j++){
           var temp;
           if(arr[j] > arr[j+1]) {
               temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
             }
        }
    }
  return arr;
}
