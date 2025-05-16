const majorityElement = (nums) => {
  let cnt1 = 0;
  let cnt2 = 0;
  let el1 = -1;
  let el2 = -2;

  for (let i = 0; i < nums.length; i++) {
    if (cnt1 === 0 && nums[i] != el2) {
      el1 = nums[i];
      cnt1 = 1;
    } else if (cnt2 === 0 && nums[i] != el1) {
      el2 = nums[i];
      cnt2 = 1;
    } else if (nums[i] === el1) cnt1++;
    else if (nums[i] === el2) cnt2++;
    else {
      cnt1--;
      cnt2--;
    }
  }

  cnt1 = 0;
  cnt2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === el1) cnt1++;
    if (nums[i] === el2) cnt2++;
  }

  const ans = [];
  if (cnt1 > Math.floor(nums.length / 3)) {
    ans.push(el1);
  }
  if (cnt2 > Math.floor(nums.length / 3)) {
    ans.push(el2);
  }

  return ans;
};
