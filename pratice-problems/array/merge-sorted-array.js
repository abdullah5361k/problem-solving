const mergeArrays = (nums1, m, nums2, n) => {
  let left = 0;
  let right = 0;
  let k = m;

  while (left < nums1.length) {
    if (nums1[left] > nums2[right]) {
      nums1[k] = nums1[left];
      nums1[left] = nums2[right];
      left++, right++, k++;
    } else if (left < k && nums1[k - 1] != 0 && nums1[left] > nums1[k - 1]) {
      for (let i = left, j = n; i < n && j < k; i++, j++) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
        left++;
      }
    } else if (nums1[left] === 0) {
      nums1[left++] = nums2[right++];
    } else {
      left++;
    }
  }
};

const n1 = [4, 0, 0, 0, 0, 0];
const n2 = [1, 2, 3, 5, 6];

mergeArrays(n1, n2, 5, 1);
