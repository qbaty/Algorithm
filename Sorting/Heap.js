(function(root, undefined) {

    /**
     * 堆排序
     */
    function MaxHeap(array) {
        this.array = array;
        this.totalLen = array.length;
        this.notLeafLen = Math.floor(this.totalLen / 2);  // 非叶子节点长度
        this.buildHeap();
    }

    MaxHeap.prototype.buildHeap = function() {
        for(var i = this.notLeafLen - 1; i >= 0; i--) {
            this.heapify(i);
        }
    };

    MaxHeap.prototype.heapify = function(index) {
        var array = this.array;
        var largest = -1;

        var leftIndex = index * 2 + 1;
        var rightIndex = index * 2 + 2;
        if(leftIndex < this.totalLen) {
            largest = array[leftIndex] > array[index] ? leftIndex : index;
        }
        if(rightIndex < this.totalLen) {
            largest = array[rightIndex] > array[largest] ? rightIndex : largest;
        }
        if(largest != -1 && largest != index) {
            exchange(array, index, largest);
            if(index < this.notLeafLen) {    // 叶子节点不需要堆化
                this.heapify(largest);
            }
        }
    };

    MaxHeap.prototype.sort = function() {
        var array = this.array;
        for(var i = this.totalLen - 1; i > 0; i--) {
            exchange(array, 0, i);
            this.totalLen--;
            this.heapify(0);
        }

        this.totalLen = array.length;
    };

    function exchange(array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    root.MaxHeap = MaxHeap;

})(window);
