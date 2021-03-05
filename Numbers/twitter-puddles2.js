/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    function getGap(list) {
        if (list.length < 3) {
            return 0;
        }
        let max1 = -1;
        let max2 = -1;
        list.forEach((val, index) => {
            if (val > list[max1] || max1 === -1) {
                max2 = max1;
                max1 = index;
            } else if (val > list[max2]  || max2 === -1) {
                max2 = index;
            }
        });
        let sum = getSumBetweenIndexs(max1, max2, list);
        let list1 = list.slice(0, Math.min(max1, max2) + 1); 
        let list2 = list.slice(Math.max(max1, max2)); 
        return getGap(list1) + sum + getGap(list2);
       
    }
    let getSumBetweenIndexs = (i1, i2, list) => {
        let sum = 0;
        let max = Math.max(i1, i2);      
        let min = Math.min(i1, i2);   
        let base = list[i2];
        for (let i = min + 1; i < max; i ++) {
            sum += list[i2] - list[i]
        }
        return sum;
    };
    return getGap(height);
};