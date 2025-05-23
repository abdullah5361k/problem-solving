const sort = (arr, si, ei, mid) => {
  let temp = [];
  let i = si;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= ei) {
    if (arr[i] < arr[j]) {
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
  for (let idx = si, k = 0; idx <= ei; idx++, k++) {
    arr[idx] = temp[k];
  }
};

const mergeSort = (arr, si, ei) => {
  if (si >= ei) return;
  let mid = Math.floor((si + ei) / 2);

  mergeSort(arr, si, mid);
  mergeSort(arr, mid + 1, ei);
  sort(arr, si, ei, mid);
};

let arr = [5, 3, 8, 4, 2];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // Sorted array
