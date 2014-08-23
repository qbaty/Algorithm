/**
 * Created by jo32 on 8/22/14.
 */

var DataStructure = (function () {

    /**
     * Definition of Heap, implemented according to:
     * http://en.wikipedia.org/wiki/Heapsort
     * */
    function Heap(comp, elements) {
        this.comp = comp;
        if (!elements) {
            elements = [];
        }
        this.elements = elements;
        this.heapify();
    }

    Heap.prototype.add = function (element) {
        this.elements.push(element);
        this.heapify();
    };

    Heap.prototype.top = function () {
        var element = this.elements.shift();
        this.heapify();
        return element;
    };

    Heap.prototype.getSize = function () {
        return this.elements.length;
    };

    Heap.prototype.get = function (index) {
        return this.elements[index];
    };

    Heap.prototype.set = function (index, element) {
        this.elements[index] = element;
    };

    Heap.prototype.shiftDown = function (parent) {
        if (!parent) {
            parent = 0;
        }
        while (parent * 2 + 1 < this.getSize()) {
            var child = parent * 2 + 1;
            var swap = parent;
            if (this.comp(this.get(parent), this.get(child))) {
                swap = child;
            }
            child += 1;
            if (child < this.getSize() && this.comp(this.get(swap), this.get(child))) {
                swap = child;
            }
            if (swap !== parent) {
                var t = this.get(swap);
                this.set(swap, this.get(parent));
                this.set(parent, t);
                parent = swap;
            } else {
                return;
            }
        }
    };

    Heap.prototype.heapify = function () {
        var start = Math.floor((this.getSize() - 2) / 2);
        while (start >= 0) {
            this.shiftDown(start);
            start -= 1;
        }
    };

    return {
        "Heap": Heap
    }

})();

var Heuristic = (function () {

    function Manhattan(pointA, pointB) {
        return Math.abs(pointA.x - pointB.x) + Math.abs(pointA.y - pointB.y);
    }

    return {
        "Manhattan": Manhattan
    }

})();

var Vector = {
    // up, down, left, right
    "UDLR": [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ],

    // up, down, left, right, and diagonal
    "AROUND": [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1]
    ]
};

var Algorithm;
Algorithm = (function () {

    /**
     * The A* path finding algorithm, implemented according to:
     * http://en.wikipedia.org/wiki/A*_search_algorithm
     */
    var AStart;
    AStart = (function () {

        function Node(x, y, value) {
            this.x = x;
            this.y = y;
            this.value = value;
            this.g = Infinity;
            this.f = Infinity;
            this.parent = null;
            this.isOpened = false;
            this.isClosed = false;
        }

        // the `matrix` must be a square
        function Grid(matrix) {
            if (!matrix) {
                throw new Error("Matrix is not given");
            }
            var size = matrix.length;
            this.size = size;
            this.grid = new Array(size);
            for (var x = 0; x < size; x++) {
                this.grid[x] = new Array(size);
                for (var y = 0; y < size; y++) {
                    this.grid[x][y] = new Node(x, y, matrix[x][y]);
                }
            }
        }

        Grid.prototype.isOutOfRange = function (x, y) {
            if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
                return true;
            }
            return false;
        };

        Grid.prototype.get = function (x, y) {
            return this.grid[x][y];
        };

        Grid.prototype.getNeigbors = function (node, vectors, filter) {
            var neighbors = [];
            var x;
            var y;
            for (var i = 0; i < vectors.length; i++) {
                var vector = vectors[i];
                x = node.x + vector[0];
                y = node.y + vector[1];
                if (!this.isOutOfRange(x, y)) {
                    var neighbor = this.get(x, y);
                    if (filter(neighbor)) {
                        neighbors.push(neighbor);
                    }
                }
            }
            return neighbors;
        };

        function reconstructPath(node) {
            var path = [node];
            while (node.parent) {
                node = node.parent;
                path.push(node);
            }
            return path;
        }

        function find(matrix, startNode, endNode, vectors, filter, heuristic) {

            var grid = new Grid(matrix);
            var startNode = grid.get(startNode.x, startNode.y);
            var endNode = grid.get(endNode.x, endNode.y);
            startNode.g = 0;
            startNode.f = 0;
            startNode.isOpened = true;
            // Keep the open nodes in a priority queue according its f property
            var queue = new DataStructure.Heap(function (nodeA, nodeB) {
                return nodeA.f > nodeB.f;
            }, [startNode]);

            // A* algorithm is essentially a modified BFS.
            while (queue.getSize() > 0) {
                var node = queue.top();
                node.isClosed = true;
                if (node === endNode) {
                    return reconstructPath(endNode);
                }

                var neighbors = grid.getNeigbors(node, vectors, filter);
                for (var i = 0; i < neighbors.length; i++) {
                    var neighbor = neighbors[i];
                    if (neighbor.isClosed) {
                        continue;
                    }

                    // checking is the new tentative path is smaller than existed one
                    var tempG = node.g + heuristic(node, neighbor);
                    if (!neighbor.isOpened || tempG < neighbor.g) {
                        neighbor.g = tempG;
                        neighbor.f = neighbor.g + heuristic(neighbor, endNode);
                        neighbor.parent = node;

                        if (!neighbor.isOpened) {
                            queue.add(neighbor);
                            neighbor.isOpened = true;
                        } else {
                            queue.heapify();
                        }
                    }
                }
            }

            // path not found
            return null;
        }

        return {
            "find": find
        }

    })();

    return {
        "AStar": AStart
    }
})();

/**
var matrix = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
];

var filter = function (node) {
    if (node.value == 1) {
        return false;
    }
    return true;
};

var path = Algorithm.AStar.find(matrix, {x: 4, y: 3}, {x: 0, y: 4}, Vector.UDLR, filter, Heuristic.Manhattan);
*/
