class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        let node = this.root;
        const newNode = new Node(val);
        while (node !== null) {
            if (val < node.val) {
                if (node.left !== null) {
                    node = node.left;
                }
                else {
                    node.left = newNode;
                    return this;
                }
            }
            else {
                if (node.right !== null) {
                    node = node.right;
                }
                else {
                    node.right = newNode;
                    return this;
                }
            }
        }
        this.root = newNode;
        return this;
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, node = this.root) {
        if (node === null) {
            this.root = new Node(val);
            return this;
        }
        else {
            if (val < node.val) {
                if (node.left !== null) {
                    node = node.left;
                }
                else {
                    node.left = new Node(val);
                    return this;
                }
            }
            else {
                if (node.right !== null) {
                    node = node.right;
                }
                else {
                    node.right = new Node(val);
                    return this;
                }
            }
            return this.insertRecursively(val, node);
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let node = this.root;
        while (node !== null) {
            if (val === node.val) {
                break;
            }
            else if (val < node.val) {
                node = node.left;
            }
            else {
                node = node.right;
            }
        }
        return node || undefined;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, node = this.root) {
        if (node === null) {
            return undefined;
        }
        else {
            if (val === node.val) {
                return node;
            }
            else if (val < node.val) {
                return this.findRecursively(val, node.right);
            }
            else {
                return this.findRecursively(val, node.right);
            }
        }
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder(node = this.root) {
        const traversal = [];
        function traverse(node){
            traversal.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(node);
        return traversal;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder(node = this.root) {
        const traversal = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            traversal.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(node);
        return traversal;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder(node = this.root) {
        const traversal = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            traversal.push(node.val);
        }
        traverse(node);
        return traversal;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs(node = this.root) {
        const queue = [node];
        const traversal = [];

        while(queue.length){
            node = queue.shift();
            traversal.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return traversal;
    }
}

module.exports = BinarySearchTree;
