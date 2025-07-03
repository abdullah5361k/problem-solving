const findPred = (root) => {
  let temp = root;
  while (temp && temp.right) {
    temp = temp.right;
  }

  return temp;
};

const findSucc = (root) => {
  let temp = root;
  while (temp && temp.left) {
    temp = temp.left;
  }
  return temp;
};

const find = (root, key, pred, succ) => {
  if (!root) return;

  if (root.data === key) {
    if (root.left) {
      pred[0] = findPred(root.left);
    }

    if (root.right) {
      succ[0] = findSucc(root.right);
    }
  } else if (root.data > key) {
    succ[0] = root;
    find(root.left, key, pred, succ);
  } else {
    pred[0] = root;
    find(root.right, key, pred, succ);
  }
};

const findPreSuc = (root, key) => {
  const pred = [null];
  const succ = [null];
  find(root, key, pred, succ);

  return [pred[0], succ[0]];
};
