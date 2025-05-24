const threeSum = (nums) => {
  let ans = [];
  arr.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length - 2) {
    if (i != 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        ans.push([nums[i], nums[j], nums[k]]);
        j++, k--;
        // skip the duplicates:
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
    i++;
  }

  return ans;
};

threeSum([-1, 0, 1, 2, -1, -4]);
