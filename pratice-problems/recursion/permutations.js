const getAllPermutations = (nums, ans, allPerms, len) => {
  if (ans.length === len) {
    allPerms.push([...ans]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
    getAllPermutations(
      nums.slice(0, i).concat(nums.slice(i + 1)),
      ans,
      allPerms,
      len
    );
    ans.pop();
  }

  return;
};

var permute = function (nums) {
  const allPerms = [];
  let ln = nums.length;
  getAllPermutations(nums, [], allPerms, ln);
  console.log(allPerms);
};

permute([1, 2, 3]);
