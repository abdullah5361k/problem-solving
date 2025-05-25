const countNoOfPairs = (arr, si, ei, mid) => {
  let count = 0;
  let j = mid + 1;
  for (let i = si; i <= mid; i++) {
    while (j <= ei && arr[i] > 2 * arr[j]) {
      j++;
    }
    count += j - (mid + 1);
  }
  return count;
};

const sort = (arr, si, ei, mid) => {
  let temp = [];
  let i = si;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= ei) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= ei) {
    temp[k++] = arr[j++];
  }
  for (let i = si, k = 0; i <= ei; i++, k++) {
    arr[i] = temp[k];
  }
};

const mergeSort = (arr, si, ei) => {
  let cnt = 0;
  if (si >= ei) return cnt;
  let mid = Math.floor((si + ei) / 2);
  cnt += mergeSort(arr, si, mid);
  cnt += mergeSort(arr, mid + 1, ei);
  cnt += countNoOfPairs(arr, si, ei, mid);
  sort(arr, si, ei, mid);
  return cnt;
};

const reversePairs = (nums) => {
  return mergeSort(nums, 0, nums.length - 1);
};
