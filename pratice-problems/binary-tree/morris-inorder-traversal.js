class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const morrisInorder = (root) => {
  let current = root;
  while (current) {
    if (!current.left) {
      console.log(current.val + " ");
      current = current.right;
    } else {
      let predecessor = current.left;
      while (predecessor.right && predecessor.right != current) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        predecessor.right = current; // Create Thread
        current = current.left;
      } else {
        predecessor.right = null; // Remove Thread
        console.log(current.val + " ");
        current = current.right;
      }
    }
  }
};

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.left.left = new Node(7);
root.left.right = new Node(5);
root.left.right.right = new Node(9);
root.left.left.right = new Node(8);
root.right = new Node(3);
root.right.right = new Node(6);

morrisInorder(root);
