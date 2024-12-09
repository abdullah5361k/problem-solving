class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  add(data) {
    return this.list.push(data);
  }

  remove() {
    if (this.isEmpty()) return null;
    return this.list.shift();
  }
}

class BinaryTree {
  idx = -1;

  buildTree(nodes) {
    this.idx++;
    if (nodes[this.idx] === -1) return null;

    const newNode = new Node(nodes[this.idx]);
    newNode.left = this.buildTree(nodes);
    newNode.right = this.buildTree(nodes);
    return newNode;
  }

  preOrderTraversal(root) {
    if (root == null) return;

    process.stdout.write(`${root.data}  `);
    // console.log(root.data);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  }

  inOrderTraversal(root) {
    if (root === null) return;

    this.inOrderTraversal(root.left);
    process.stdout.write(`${root.data}  `);
    this.inOrderTraversal(root.right);
  }

  postOrderTraversal(root) {
    if (root === null) return;

    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    process.stdout.write(`${root.data}  `);
  }

  levelOrderTraversal(root) {
    const q = new Queue();
    q.add(root);
    q.add(null);

    while (!q.isEmpty()) {
      const top = q.remove();
      if (top === null) {
        console.log();
        if (q.isEmpty()) break;
        else {
          q.add(null);
        }
      } else {
        process.stdout.write(`${top.data}  `);
        if (top.left != null) q.add(top.left);
        if (top.right != null) q.add(top.right);
      }
    }
  }

  heightOfTree(root) {
    if (root === null) return 0;

    let leftH = this.heightOfTree(root.left);
    let rightH = this.heightOfTree(root.right);
    return Math.max(leftH, rightH) + 1;
  }

  heightOfTreeUsingLevelOrderTraversal(root) {
    const qt = new Queue();
    let height = 0;
    qt.add(root);
    qt.add(null);

    while (!qt.isEmpty()) {
      const removedNode = qt.remove();
      if (removedNode === null) {
        height++;
        if (qt.isEmpty()) break;
        else qt.add(null);
      } else {
        if (removedNode.left != null) {
          qt.add(removedNode.left);
        }
        if (removedNode.right != null) {
          qt.add(removedNode.right);
        }
      }
    }

    return height;
  }

  countOfNodesUsingRec(root) {
    if (root === null) return 0;

    let leftC = this.countOfNodesUsingRec(root.left);
    let rightC = this.countOfNodesUsingRec(root.right);

    return leftC + rightC + 1;
  }

  countOfNodesUsingLevelOrderTraversal(root) {
    let count = 0;

    const q = new Queue();
    q.add(root);

    while (!q.isEmpty()) {
      const removedNode = q.remove();
      count++;
      if (removedNode.left != null) {
        q.add(removedNode.left);
      }
      if (removedNode.right != null) {
        q.add(removedNode.right);
      }
    }

    return count;
  }

  sumOfNodes(root) {
    if (root == null) return 0;

    let leftSum = this.sumOfNodes(root.left);
    let rightSum = this.sumOfNodes(root.right);

    return leftSum + rightSum + root.data;
  }

  diameterOfNodes(rootNode) {
    if (rootNode === null) return { ht: 0, diameter: 0 };

    const left = this.diameterOfNodes(rootNode.left);
    const right = this.diameterOfNodes(rootNode.right);

    const ht = Math.max(left.ht, right.ht) + 1;
    const diameter = Math.max(
      Math.max(left.diameter, right.diameter),
      left.diameter + right.diameter + 1
    );

    return { ht, diameter };
  }

  isSame(leftTree, rightTree) {
    if (leftTree === null && rightTree === null) {
      return true;
    } else if (
      leftTree == null ||
      rightTree === null ||
      leftTree.data != rightTree.data
    ) {
      return false;
    }

    if (!this.isSame(leftTree.left, rightTree.left)) {
      return false;
    }
    if (this.isSame(rightTree.right, rightTree.right)) {
      return false;
    }

    return true;
  }

  subTree(rootNode, subNode) {
    if (rootNode === null) return;
    if (rootNode.data === subNode.data) {
      if (this.isSame(rootNode, subNode)) return true;
    }
    this.subTree(rootNode.left, subNode);
    this.subTree(rootNode.right, subNode);
  }
}

let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const bt = new BinaryTree();
// console.log(bt.buildTree(nodes, 0).data);
const rootNode = bt.buildTree(nodes);
// bt.preOrderTraversal(rootNode);
// console.log();
// bt.inOrderTraversal(rootNode);
// console.log();
// bt.postOrderTraversal(rootNode);
// console.log();

// bt.levelOrderTraversal(rootNode);

// console.log(bt.heightOfTree(rootNode));
// console.log(bt.heightOfTreeUsingLevelOrderTraversal(rootNode));
// console.log(bt.countOfNodesUsingLevelOrderTraversal(rootNode));
// console.log(bt.countOfNodesUsingRec(rootNode));
// console.log(bt.sumOfNodes(rootNode));
console.log(bt.diameterOfNodes(rootNode));
