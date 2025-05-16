const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const el = target - nums[i];
    if (map.has(el)) {
      return [map.get(el), i];
    }
    map.set(nums[i], i);
  }
};
