const inorderTraversal = (root, arr) => {
  if (!root) return;

  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
};

const findTarget = (root, k) => {
  const arr = [];
  inorderTraversal(root, arr);

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];

    if (sum === k) return true;

    if (sum > k) j--;
    else i++;
  }

  return false;
};

const dfs = (root, k, st) => {
  if (!root) return false;

  if (st.has(k - root.val)) return true;
  st.add(root.val);

  if (dfs(root.left, k, st)) return true;
  if (dfs(root.right, k, st)) return true;

  return false;
};
