const getAllCombinations = (i, arr, target, ans, combi) => {
  if (i === arr.length || target < 0) return;

  if (target === 0) {
    ans.push(combi);
    return;
  }

  combi.push(arr[i]);
  // Pick single
  getAllCombinations(i + 1, arr, target - arr[i], ans, combi);
  // Pick multiple time
  getAllCombinations(i, arr, target - arr[i], ans, combi);
  combi.pop();
  // Don't picks
  getAllCombinations(i + 1, arr, target, ans, combi);
};

var combinationSum = function (candidates, target) {
  const ans = [];
  getAllCombinations(0, candidates, target, ans, []);
  console.log(ans);
};

combinationSum([2, 3, 6, 7], 7);
