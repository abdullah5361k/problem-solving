const sortArray = (leftArr, rightArr) => {
  let temp = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      temp[k] = leftArr[i];
      i++;
    } else {
      temp[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    temp[k++] = leftArr[i++];
  }
  while (j < rightArr.length) {
    temp[k++] = rightArr[j++];
  }

  return temp;
};

const mergeSort = (si, ei, arr) => {
  if (si >= ei) return arr[si];
  let mid = Math.floor((si + ei) / 2);
  let left = this.mergeSort(si, mid, arr);
  let right = this.mergeSort(mid + 1, ei, arr);
  return this.sortArray(left, right);
};

const mergeKArrays = (arr, K) => {
  // code here

  return this.mergeSort(0, arr.length - 1, arr);
};
