const sortArray = (arr, si, ei, mid, cnt) => {
  let temp = [];
  let i = si;
  let j = mid + 1;
  let k = 0;
  let count = cnt;
  while (i <= mid && j <= ei) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
      count += mid - i + 1;
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
  return count;
};

const mergeSort = (arr, si, ei) => {
  if (si >= ei) return 0;
  let mid = Math.floor((si + ei) / 2);
  let leftCnt = this.mergeSort(arr, si, mid);
  let rightCnt = this.mergeSort(arr, mid + 1, ei);
  return this.sortArray(arr, si, ei, mid, leftCnt + rightCnt);
};

const inversionCount = (arr) => {
  return this.mergeSort(arr, 0, arr.length - 1);
};
