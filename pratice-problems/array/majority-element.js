const majorityElement = (nums) => {
  let majEl = -1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majEl = nums[i];
      count = 1;
    } else {
      if (majEl === nums[i]) {
        count++;
      } else {
        count--;
      }
    }
  }

  return majEl;
};
