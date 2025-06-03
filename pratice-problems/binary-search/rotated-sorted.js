const rotatedSortedArray = (nums, target) => {
  let si = 0;
  let ei = nums.length - 1;

  while (si <= ei) {
    let mid = Math.floor((si + ei) / 2);
    if (nums[mid] === target) return mid;

    // Let's check wheter the mid lies on left or right plan
    if (nums[mid] > nums[ei]) {
      // Left  plane
      // Check is target element present in left plane or not
      if (target >= nums[si] && target < nums[mid]) {
        ei = mid - 1;
      } else {
        si = mid + 1;
      }
    } else {
      if (target >= nums[mid + 1] && target <= nums[ei]) {
        si = mid + 1;
      } else {
        ei = mid - 1;
      }
    }
  }
};
