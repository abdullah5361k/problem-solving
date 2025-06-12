const heapify = (arr, i, size) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let maxIdx = i;

  if (left < size && arr[left] > arr[maxIdx]) {
    maxIdx = left;
  }

  if (right < size && arr[right] > arr[maxIdx]) {
    maxIdx = right;
  }

  if (maxIdx != i) {
    [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
    heapify(arr, maxIdx, size);
  }
};

const heapSort = (arr) => {
  // Make max heap
  let n = arr.length;

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, i, n);
  }

  // After max heap swap zero element with the last idx

  for (let i = n - 1; i >= 0; i--) {
    // Swap
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
};
