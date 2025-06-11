const findMedianSortedArrays = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  let cnt = 0;
  let el1 = 0;
  let el2 = 0;
  let med = Math.floor((nums1.length + nums2.length) / 2);

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      if (cnt === med) {
        el1 = nums1[i];
        cnt++;
        break;
      }
      el2 = nums1[i];
      i++;
    } else {
      if (cnt === med) {
        el1 = nums2[j];
        cnt++;
        break;
      }
      el2 = nums2[j];
      j++;
    }
    cnt++;
  }

  while (i < nums1.length) {
    if (cnt === med) {
      el1 = nums1[i];
      cnt++;
      break;
    } else if (cnt < med) {
      el2 = nums1[i];
    }
    i++, cnt++;
  }

  while (j < nums2.length) {
    if (cnt === med) {
      el1 = nums2[j];
      cnt++;
      break;
    } else if (cnt < med) {
      el2 = nums2[j];
    }
    j++, cnt++;
  }

  if ((nums1.length + nums2.length) % 2 == 0) {
    return (el1 + el2) / 2;
  }

  return el1;
};

findMedianSortedArrays([1, 3], [2, 7]);
