/**
 * Given a name, find it in a tree
 * use deep first search
**/
function dfs(tree, name) {
    let paths = [tree];
    let indexes = [0];

    while (paths.length > 0) {
        let level = paths.length - 1;
        let parent = paths[level - 1];
        let cNode = parent ? parent.children[indexes[level]] : paths[0];
    
        if (cNode.name === name) {
            return cNode;
        } else {
            let nextNode = parent ? parent.children[indexes[level] + 1]: null;

            if (cNode.children && cNode.children[0]) {
                paths.push(cNode.children[0]);
                indexes.push(0);
            } else if (nextNode) {
                ++indexes[level];
                paths.splice(level, 1, nextNode);
            } else {
                ++indexes[level - 1];
                paths.splice(level - 1, 1, paths[level - 2].children[indexes[level - 1]]);
                paths.pop();
                indexes.pop();
            }
        }
    }
}