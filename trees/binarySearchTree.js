class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  insert(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (root.data > value) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }

    return root;
  }

  inorderTraversal(root) {
    if (root === null) return;

    this.inorderTraversal(root.left);
    process.stdout.write(`${root.data} `);
    this.inorderTraversal(root.right);
  }

  searchInABST(root, key) {
    if (root === null) return false;

    if (root.data === key) return true;

    if (key > root.data) {
      return this.searchInABST(root.right, key);
    } else {
      return this.searchInABST(root.left, key);
    }
  }

  findInorderSuccessorValue(root) {
    while (root.left != null) {
      root = root.left;
    }

    return root;
  }

  deleteNode(root, value) {
    if (root.data < value) {
      root.right = this.deleteNode(root.right, value);
    } else if (root.data > value) {
      root.left = this.deleteNode(root.left, value);
    } else {
      // Case 1 : Leaf Node
      if (root.left === null && root.right === null) return null;

      // Case 2 : One child
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      // Case 3 : Both children
      const IS = this.findInorderSuccessorValue(root.right);
      root.data = IS.data;
      root.right = this.deleteNode(root.right, IS.data);
    }

    return root;
  }

  printInRange(root, k1, k2) {
    if (root === null) return;

    if (root.data > k1) {
      this.printInRange(root.left);
    } else if (root.data < k2) {
      this.printInRange(root.right);
    } else if (root.data >= k1 && root.data <= k2) {
      console.log(root.data);
    }

    return;
  }

  sortedArrayToBST(arr, si, ei) {
    if (ei < si || si > ei) return null;

    // Mid
    let mid = Math.floor((si + ei) / 2);
    const node = new Node(arr[mid]);

    node.left = this.sortedArrayToBST(arr, si, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, ei);

    return node;
  }

  getInorder(root, values) {
    if (root == null) return;

    this.getInorder(root.left, values);
    values.push(root.data);
    this.getInorder(root.right, values);
  }

  bstToBalancedBst(root) {
    let values = [];
    this.getInorder(root, values);
    const rootNode = this.sortedArrayToBST(values, 0, values.length - 1);
    this.inorderTraversal(rootNode);
  }

  mergeTwoSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let t = 0;
    const newArray = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArray[t] = arr1[i];
        i++;
      } else {
        newArray[t] = arr2[j];
        j++;
      }

      t++;
    }

    while (i < arr1.length) {
      newArray[t++] = arr1[i++];
    }

    while (j < arr2.length) {
      newArray[t++] = arr2[j++];
    }

    return newArray;
  }

  mergeTwoBSTs(root1, root2) {
    const bst1Values = [];
    const bst2Values = [];
    this.getInorder(root1, bst1Values);

    this.getInorder(root2, bst2Values);

    // Merge two sorted arrays
    const mergedValues = this.mergeTwoSortedArrays(bst1Values, bst2Values);

    // create new BST
    const newRoot = this.sortedArrayToBST(
      mergedValues,
      0,
      mergedValues.length - 1
    );

    this.inorderTraversal(newRoot);
  }
}

const bt = new BST();

// const array = [8, 5, 3, 1, 4, 6, 10, 11, 14];

// let root = null;

// for (let i = 0; i < array.length; i++) {
//   root = bt.insert(root, array[i]);
// }
// bt.inorderTraversal(root);
// console.log();
// bt.deleteNode(root, 5);
// bt.inorderTraversal(root);
// console.log();

// const array = [3, 5, 6, 8, 10, 11, 12];

// const root = bt.sortedArrayToBST(array, 0, array.length - 1);
// bt.inorderTraversal(root);
// console.log();

// const root = new Node(8);
// root.left = new Node(6);
// root.left.left = new Node(5);
// root.left.left.left = new Node(3);
// root.right = new Node(10);
// root.right.right = new Node(11);
// root.right.right.right = new Node(12);

// bt.bstToBalancedBst(root);
// bt.inorderTraversal(root);

const root1 = new Node(2);
root1.left = new Node(1);
root1.right = new Node(4);

const root2 = new Node(9);
root2.left = new Node(3);
root2.right = new Node(12);

bt.mergeTwoBSTs(root1, root2);
