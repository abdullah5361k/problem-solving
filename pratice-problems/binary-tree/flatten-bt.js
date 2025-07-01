const dfs = (root, nodes) => {
  if (!root) return;

  nodes.push(root);

  dfs(root.left, nodes);
  dfs(root.right, nodes);
};

const convertToLL = (root) => {
  const nodes = [];
  dfs(root, nodes);
  let temp = root;
  temp.left = temp.right = null;
  for (let i = 1; i < nodes.length; i++) {
    nodes[i].left = nodes[i].right = null;
    temp.right = nodes[i];
    temp = temp.right;
  }
};

const flatten = (root) => {
  if (!root) return;
  convertToLL(root);
};
