const generateSubsets = (i, nums, ans, st, aux) => {
  if (i === nums.length) {
    if (!st.has([...aux].toString())) {
      ans.push([...aux]);
      st.add([...aux].toString());
    }
    return;
  }
  generateSubsets(i + 1, nums, ans, st, [...aux, nums[i]]);
  generateSubsets(i + 1, nums, ans, st, aux);
};

const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];
  const st = new Set();
  generateSubsets(0, nums, result, st, []);
  return result;
};
