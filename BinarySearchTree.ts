class TreeNode {
  key: any;
  value: any;
  left: null;
  right: null;
  constructor(key: any, value: any) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: any;
  constructor() {
    this.root = null;
  }

  // Method to put (insert) a key-value pair into the BST
  put(key: number, value: string) {
    this.root = this._put(this.root, key, value);
  }

  // Helper function for put operation (recursive)
  _put(
    node: { key: number; left: any; right: any; value: any } | null,
    key: number,
    value: string
  ) {
    if (node === null) {
      return new TreeNode(key, value); // Create a new node if position is found
    }

    // Compare the key with the node's key
    if (key < node.key) {
      node.left = this._put(node.left, key, value); // Insert in the left subtree
    } else if (key > node.key) {
      node.right = this._put(node.right, key, value); // Insert in the right subtree
    } else {
      node.value = value; // Update the value if the key already exists
    }

    return node;
  }

  // Method to check if the tree contains a key
  contains(key: number) {
    return this._contains(this.root, key);
  }

  // Helper function for contains operation (recursive)
  _contains(node: { key: number; left: any; right: any } | null, key: number) {
    if (node === null) {
      return false; // Key not found
    }

    if (key < node.key) {
      return this._contains(node.left, key); // Search in the left subtree
    } else if (key > node.key) {
      return this._contains(node.right, key); // Search in the right subtree
    } else {
      return true; // Key found
    }
  }

  // Method for InOrder traversal (returns values in ascending order)
  inOrder() {
    const result = [];
    this._inOrder(this.root, result);
    return result;
  }

  // Helper function for InOrder traversal (recursive)
  _inOrder(node: { left: any; value: any; right: any } | null, result: any[]) {
    if (node !== null) {
      this._inOrder(node.left, result); // Traverse left subtree
      result.push(node.value); // Visit the node
      this._inOrder(node.right, result); // Traverse right subtree
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();
bst.put(10, "Ten");
bst.put(20, "Twenty");
bst.put(5, "Five");
bst.put(15, "Fifteen");

console.log(bst.contains(10)); // Output: true
console.log(bst.contains(25)); // Output: false

console.log(bst.inOrder()); // Output: ['Five', 'Ten', 'Fifteen', 'Twenty']
