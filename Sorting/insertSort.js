/*
* insertSort 
* give arr = [13, 4, 1, 6, 5, 3]
* return arr = [1, 3, 4, 5, 6, 13]
*/

function insertSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] <= arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
 