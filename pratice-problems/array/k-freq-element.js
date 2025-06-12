const topKFrequent = (nums, k) => {
  const hm = new Map();
  for (let i = 0; i < nums.length; i++) {
    hm.set(nums[i], (hm.get(nums[i]) || 0) + 1);
  }

  let temp = [];
  for (let [num, count] of hm) {
    temp.push([count, num]);
  }

  temp.sort((a, b) => b[0] - a[0]);

  return temp.slice(0, k).map((item) => item[1]);
};
