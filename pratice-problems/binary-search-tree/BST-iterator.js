const dfs = (root, arr) => {
  if (!root) return;

  dfs(root.left, arr);
  arr.push(root);
  dfs(root.right, arr);
};

const BSTIterator = function (root) {
  this.iterator = [];
  dfs(root, this.iterator);
  this.idx = 0;
};

BSTIterator.prototype.next = function () {
  return this.iterator[this.idx++].val;
};

BSTIterator.prototype.hasNext = function () {
  if (!this.iterator[this.idx]) return false;
  else return true;
};
