const nextGreaterElement = (nums1, nums2) => {
  const map = new Map();
  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      map.set(nums2[i], -1);
    } else {
      map.set(nums2[i], stack[stack.length - 1]);
    }
    stack.push(nums2[i]);
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.get(nums1[i]);
  }
  return nums1;
};

nextGreaterElement([], [4, 5, 2, 25]);
