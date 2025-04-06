class Heap {
  constructor() {
    this.arr = [];
  }

  add(data) {
    // Insert into arr

    if (this.arr.length === 0) {
      this.arr[0] = data;
      return;
    }

    this.arr[this.arr.length] = data;

    // Fix heap

    let par = Math.floor((this.arr.length - 1) / 2);
    let child = this.arr.length - 1;

    while (par >= 0 && this.arr[par] > this.arr[child]) {
      // Swap
      let temp = this.arr[par];
      this.arr[par] = this.arr[child];
      this.arr[child] = temp;

      child = par;
      par = Math.floor((child - 1) / 2);
    }
  }

  peek() {
    return this.arr[0];
  }

  heapify(idx) {
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let minIdx = idx;

    if (left < this.arr.length && this.arr[left] < this.arr[minIdx]) {
      minIdx = left;
    }

    if (right < this.arr.length && this.arr[right] < this.arr[minIdx]) {
      minIdx = right;
    }

    if (idx != minIdx) {
      // Swap
      let temp = this.arr[minIdx];
      this.arr[minIdx] = this.arr[idx];
      this.arr[idx] = temp;

      this.heapify(minIdx);
    }
  }

  remove() {
    // Swap
    let temp = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = temp;

    this.arr.pop();

    this.heapify(0);
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

//Heap Sort

const heapify = (arr, i, size) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const maxIdx = i;

  if (left < size && arr[left] > arr[maxIdx]) {
    maxIdx = left;
  }

  if (right < size && arr[right] > arr[maxIdx]) {
    maxIdx = right;
  }

  if (i != maxIdx) {
    // Swap -> Root node with max node in childrens
    let temp = arr[maxIdx];
    arr[maxIdx] = arr[idx];
    arr[idx] = temp;

    heapify(maxIdx);
  }
};

const heapSort = (arr) => {
  // Step1: Create Max heap
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // Step2: Swap

  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, 0, i);
  }
};
