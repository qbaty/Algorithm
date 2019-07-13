/*
* selectSort 
* give arr = [13, 4, 1, 6, 5, 3]
* return arr = [1, 3, 4, 5, 6, 13]
*/

function selectSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
 