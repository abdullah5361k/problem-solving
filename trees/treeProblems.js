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
      left.ht + right.ht + 1
    );

    return { ht, diameter };
  }

  isIdentical(root, subRoot) {
    if (root === null && subRoot === null) return true;

    if (root === null || subRoot === null || root.data != subRoot.data)
      return false;

    if (!this.isIdentical(root.left, subRoot.left)) return false;
    if (!this.isIdentical(root.right, subRoot.right)) return false;

    return true;
  }

  isSubTree(rootNode, subRoot) {
    if (rootNode === null) return false;

    if (rootNode.data === subRoot.data) {
      if (this.isIdentical(rootNode, subRoot)) return true;
    }

    if (this.isSubTree(rootNode.left, subRoot)) return true;
    if (this.isSubTree(rootNode.right, subRoot)) return true;

    return false;
  }

  topViewOfTree(root) {
    // We travel on tree in level order traversal
    const q = new Queue();
    q.add({ data: root, col: 0 });
    const set = new Set();

    const ans = [];

    while (!q.isEmpty()) {
      const topEl = q.remove();
      // The node is visible from top
      if (!set.has(topEl.col)) {
        set.add(topEl.col);
        ans.push(topEl.data.data);
      }

      // Add left node in queue
      if (topEl.data.left != null) {
        q.add({ data: topEl.data.left, col: topEl.col - 1 });
      }

      // Add right node in queue
      if (topEl.data.right != null) {
        q.add({ data: topEl.data.right, col: topEl.col + 1 });
      }
    }

    return ans;
  }

  kthLevelOfTree(node, k) {
    let currentLevel = 0;
    const q = new Queue();

    q.add(node);
    q.add(null);

    while (!q.isEmpty()) {
      const top = q.remove();

      if (top === null) {
        // Increase order
        currentLevel++;

        if (q.isEmpty()) {
          break;
        } else {
          q.add(null);
        }
      } else {
        if (currentLevel + 1 === k) {
          console.log(top.data);
        }

        if (top.left != null) q.add(top.left);
        if (top.right != null) q.add(top.right);
      }
    }
  }

  kthLevelOfTreeRec(root, level, k) {
    if (root === null) return;

    if (level === k) {
      console.log(root.data);
    }

    this.kthLevelOfTreeRec(root.left, level + 1, k);
    this.kthLevelOfTreeRec(root.right, level + 1, k);
  }

  getPath(root, node, arr) {
    if (root === null) return false;

    arr.push(root.data);
    if (root.data === node) {
      return true;
    }

    if (this.getPath(root.left, node, arr)) return true;
    if (this.getPath(root.right, node, arr)) return true;
    arr.pop();
    return false;
  }

  lowestCommonAnsecstar(rootNode, n1, n2) {
    // Base condition
    if (rootNode === null) return false;

    if (rootNode.data === n1 || rootNode.data === n2) return true;

    const leftSubTree = this.lowestCommonAnsecstar(rootNode.left, n1, n2);
    const rightSubTree = this.lowestCommonAnsecstar(rootNode.right, n1, n2);

    if (leftSubTree && rightSubTree) {
      console.log("LCA ", rootNode.data);
      return true;
    }
    return leftSubTree || rightSubTree;
  }

  minDistanceBetweenNodes(root, n) {
    if (root === null) return -1;

    if (root.data === n) return 0;

    const left = this.minDistanceBetweenNodes(root.left, n);
    const right = this.minDistanceBetweenNodes(root.right, n);

    if (left >= 0) return left + 1;
    else if (right >= 0) return right + 1;

    return -1;
  }

  kthAnsector(root, n, k) {
    if (root === null) return -1;

    if (root.data === n) return 0;

    let left = this.kthAnsector(root.left, n, k);
    let right = this.kthAnsector(root.right, n, k);

    if (left === -1 && right === -1) return -1;

    let max = Math.max(left, right);

    if (max + 1 === k) {
      console.log(root.data);
    }

    return max + 1;
  }

  transformToSubtree(root) {
    // Base case
    if (root === null) return 0;

    let left = this.transformToSubtree(root.left);
    let right = this.transformToSubtree(root.right);

    const currValue = root.data;
    const nLeft = root.left === null ? 0 : root.left.data;
    const nRight = root.right === null ? 0 : root.right.data;
    root.data = left + right + nLeft + nRight;
    return currValue;
  }

  univaluedOrNot(root) {
    if (root === null) return true;

    // If root node is not equal to their one of left or right child return false
    const left = root.left ? root.left : null;
    const right = root.right ? root.right : null;
    if ((left && left.data != root.data) || (right && root.data != right.data))
      return false;

    if (!this.univaluedOrNot(root.left)) return false;
    if (!this.univaluedOrNot(root.right)) return false;

    return true;
  }

  invertBinaryTree(rooNode) {
    if (rooNode === null) return null;

    const leftSubtree = this.invertBinaryTree(rooNode.left);
    const rightSubtree = this.invertBinaryTree(rooNode.right);

    rooNode.left = rightSubtree;
    rooNode.right = leftSubtree;

    return rooNode;
  }

  deleteLeafNodeWithXValue(rootNode, x) {
    if (rootNode === null) return null;

    rootNode.left = this.deleteLeafNodeWithXValue(rootNode.left, x);
    rootNode.right = this.deleteLeafNodeWithXValue(rootNode.right, x);

    if (
      rootNode.left === null &&
      rootNode.right == null &&
      rootNode.data === x
    ) {
      return null;
    }

    return rootNode;
  }

  heightOfLeftANDRightSubtree(root) {
    if (root === null) return { H: 0, LH: 0, RH: 0 };

    const left = this.heightOfLeftANDRightSubtree(root.left);
    const right = this.heightOfLeftANDRightSubtree(root.right);

    return { H: Math.max(left.H, right.H) + 1, LH: left.H, RH: right.H };
  }

  isBalanced(root) {
    const isBalancedOrNot = this.heightOfLeftANDRightSubtree(root);

    console.log("Is Balanced ", isBalancedOrNot);

    if (isBalancedOrNot.H === 0 || isBalancedOrNot.H === 1) return true;
    if (isBalancedOrNot.LH === 0 || isBalancedOrNot.RH === 0) return false;

    const diff = Math.abs(isBalancedOrNot.LH - isBalancedOrNot.RH);

    if (diff <= 1) return true;
    else return false;
  }

  leftBoundayOfTree(root, res) {
    if (root === null) return;

    // Exclude leaf nodes
    if (root.left || root.right) res.push(root.data);

    if (root.left) {
      this.leftBoundayOfTree(root.left, res);
    } else if (root.right) {
      this.leftBoundayOfTree(root.right, res);
    }
  }

  rightBoundayOfTree(root, res) {
    if (root === null) return;

    if (root.right) {
      this.rightBoundayOfTree(root.right, res);
    } else if (root.left) {
      this.rightBoundayOfTree(root.left, res);
    }

    // Exclude Leaf nodes
    if (root.left || root.right) res.push(root.data);
  }

  leafNodes(root, result) {
    if (!root) return;

    if (!root.left && !root.right) result.push(root.data);

    this.leafNodes(root.left, result);
    this.leafNodes(root.right, result);
  }

  boundaryTraversal(root) {
    const result = [];
    result.push(root.data);
    this.leftBoundayOfTree(root.left, result);
    this.leafNodes(root.left, result);
    this.leafNodes(root.right, result);
    this.rightBoundayOfTree(root.right, result);
    console.log("Result ", result);
    return result;
  }

  dfs(root, level, map) {
    if (root === null) return;

    // Initialize the level in the map if not present
    if (!map[level]) {
      map[level] = [];
    }

    // Add the current node's data to the level
    map[level].push(root.data);
    this.dfs(root.left, level - 1, map);
    this.dfs(root.right, level + 1, map);
  }

  verticalOrder(root) {
    const queue = [];
    queue.push({ root, level: 0 });
    const map = {};

    let min = Math.min();
    let max = Math.max();

    while (queue.length > 0) {
      // Sort based on root.data
      queue.sort((a, b) => a.root.data - b.root.data);

      for (let i = 0; i < queue.length; i++) {
        const top = queue.shift();
        if (!map[top.level]) {
          map[top.level] = [];
        }

        map[top.level].push(top.root.data);

        // Find max level and min level
        min = Math.min(min, top.level);
        max = Math.max(max, top.level);

        //
        if (top.root.left) {
          queue.push({ root: top.root.left, level: top.level - 1 });
        }

        if (top.root.right) {
          queue.push({ root: top.root.right, level: top.level + 1 });
        }
      }
    }
    const result = [];

    for (let i = min; i <= max; i++) {
      result.push(map[i]);
    }

    console.log(result);
  }

  topViewOfABinaryTree(root) {
    const queue = [];
    const map = {};
    queue.push({ root, level: 0 });

    while (queue.length > 0) {
      const top = queue.shift();

      if (map[top.level] === undefined) {
        map[top.level] = top.root.data;
      }

      // Left not null
      if (top.root.left) {
        queue.push({ root: top.root.left, level: top.level - 1 });
      }

      if (top.root.right) {
        queue.push({ root: top.root.right, level: top.level + 1 });
      }
    }
  }

  bottomViewOfABinaryTree(root) {
    const queue = [];
    const map = {};
    queue.push({ root, level: 0 });

    while (queue.length > 0) {
      const top = queue.shift();

      // if (map[top.level]
      map[top.level] = top.root.data;
      // }

      // Left not null
      if (top.root.left) {
        queue.push({ root: top.root.left, level: top.level - 1 });
      }

      if (top.root.right) {
        queue.push({ root: top.root.right, level: top.level + 1 });
      }
    }
  }

  rootToDestNode(root, dest, path) {
    if (root === null) return false;

    path.push(root.data);

    if (root.data === dest) return true;

    if (this.rootToDestNode(root.left, dest, path)) return true;
    if (this.rootToDestNode(root.right, dest, path)) return true;

    path.pop();

    return false;
  }

  LCA(root, p, q) {
    const path1 = [];
    const path2 = [];

    this.rootToDestNode(root, p, path1);
    this.rootToDestNode(root, q, path2);

    let lca = null;
    let i = 0;
    let j = 0;
    while (i < path1.length && j < path2.length) {
      if (path1[i] === path2[j]) {
        lca = path1[i];
      }
      i++;
      j++;
    }

    return lca;
  }

  maxWidthOfBT(root) {
    const q = [];
    q.push({ root, idx: 1 });
    let maxW = 0;

    while (q.length > 0) {
      let size = q.length;
      let right = -Infinity;
      let left = Infinity;

      for (let i = 0; i < size; i++) {
        const { root, idx } = q.shift(); // Dequeue

        left = Math.min(left, idx);
        right = Math.max(right, idx);

        // Put children in queue
        if (root.left) {
          q.push({ root: root.left, idx: 2 * idx });
        }

        if (root.right) {
          q.push({ root: root.right, idx: 2 * idx + 1 });
        }
      }

      maxW = Math.max(maxW, right - left + 1);
    }

    console.log("Max W: ", maxW);
  }

  findRootToTargetDistance(root, target) {
    if (root === null) return { distance: 0, isTarget: false };

    if (root.data === target) return { distance: 0, isTarget: true };

    const left = this.findRootToTargetDistance(root.left, target);
    const right = this.findRootToTargetDistance(root.right, target);

    if (left.isTarget) return { distance: left.distance + 1, isTarget: true };

    if (right.isTarget) return { distance: right.distance + 1, isTarget: true };

    return { distance: 0, isTarget: false };
  }
}

// let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];

const bt = new BinaryTree();
// console.log(bt.buildTree(nodes, 0).data);
// const rootNode = bt.buildTree(nodes);
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
// console.log(bt.diameterOfNodes(rootNode));

// const rootNode = new Node(1);
// rootNode.left = new Node(2);
// rootNode.left.left = new Node(4);
// rootNode.left.right = new Node(5);
// rootNode.right = new Node(3);
// rootNode.right.right = new Node(7);
// rootNode.right.left = new Node(6);

// const rootNode = new Node(1);
// rootNode.left = new Node(3);
// rootNode.left.left = new Node(3);
// rootNode.left.right = new Node(2);
// rootNode.right = new Node(3);
// rootNode.right.right = new Node(7);
// rootNode.right.left = new Node(6);

// bt.levelOrderTraversal(rootNode);
// const topNodes = bt.topViewOfTree(rootNode);

// console.log(topNodes);

// bt.kthLevelOfTree(rootNode, 5);
// bt.kthLevelOfTreeRec(rootNode, 1, 5);
// const arr = [];
// bt.getPath(rootNode, 5, arr);
// console.log(arr);

// bt.lowestCommonAnsecstar(rootNode, 4, 5);

// console.log(bt.minDistanceBetweenNodes(rootNode, 3));
// bt.transformToSubtree(rootNode);
// bt.preOrderTraversal(rootNode);
// console.log(bt.univaluedOrNot(rootNode));
// bt.preOrderTraversal(rootNode);
// bt.invertBinaryTree(rootNode);
// console.log();
// bt.preOrderTraversal(rootNode);
// console.log();

// bt.preOrderTraversal(rootNode);
// console.log();
// bt.deleteLeafNodeWithXValue(rootNode, 3);
// bt.preOrderTraversal(rootNode);
// console.log();

// const root = new Node(1);
// root.right = new Node(2);
// root.right.right = new Node(3);
// root.left.left = new Node(4);
// root.left.left.left = new Node(8);
// root.left.right = new Node(5);
// root.right = new Node(3);
// root.right.left = new Node(6);

// bt.isBalanced(root);

// const root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(3);
// root.left.left.right = new Node(4);
// root.left.left.right.left = new Node(5);
// root.left.left.right.right = new Node(6);
// root.right = new Node(7);
// root.right.right = new Node(8);
// root.right.right.left = new Node(9);
// root.right.right.left.left = new Node(10);
// root.right.right.left.right = new Node(11);

// const relt = bt.boundaryTraversal(root);

// console.log(relt);

// const root = new Node(3);
// root.left = new Node(9);
// root.right = new Node(20);
// root.right.right = new Node(7);
// root.right.left = new Node(15);
// bt.verticalOrder(root);

// const root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.left.right = new Node(5);
// root.left.right = new Node(10);
// root.left.left.right.right = new Node(6);
// root.right = new Node(3);
// root.right.right = new Node(11);
// root.right.left = new Node(4);
// bt.bottomViewOfABinaryTree(root);

// const root = new Node(3);
// root.left = new Node(5);
// root.left.left = new Node(6);
// root.left.right = new Node(2);
// root.left.right.left = new Node(7);
// root.left.right.right = new Node(4);
// root.right = new Node(1);
// root.right.left = new Node(0);
// root.right.right = new Node(8);

// console.log(bt.LCA(root, 5, 1));
// bt.lowestCommonAnsecstar(root, 5, 4);

// const root = new Node(1);
// root.left = new Node(3);
// root.right = new Node(2);
// root.left.left = new Node(5);
// root.left.left.left = new Node(6);
// root.right = new Node(2);
// root.right.right = new Node(9);
// root.right.right.left = new Node(7);

// bt.maxWidthOfBT(root);

const root = new Node(3);
root.left = new Node(5);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);
root.right = new Node(1);
root.right.right = new Node(8);
root.right.left = new Node(0);
