const subarraySum = (nums, k) => {
  // find total subarrays with given sum
  let map = new Map();
  map.set(0, 1);
  let subArrayCnt = 0;
  const prefixSum = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  for (let i = 0; i < nums.length; i++) {
    const el = prefixSum[i] - k;
    if (map.has(el)) {
      subArrayCnt += map.get(el);
    }
    map.set(prefixSum[i], (map.get(prefixSum[i]) || 0) + 1);
  }

  return subArrayCnt;
};
