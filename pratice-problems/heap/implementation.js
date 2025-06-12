class Heap {
  list;

  constructor() {
    this.list = [];
  }

  add(data) {
    this.list.push(data);
    let x = this.list.length - 1; // Node;
    let par = Math.floor((x - 1) / 2); // Parent

    while (this.list[x] < this.list[par]) {
      // Swap
      [this.list[par], this.list[x]] = [this.list[x], this.list[par]];
      x = par;
      par = Math.floor((x - 1) / 2);
    }
  }

  heapify(i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let minIdx = i;

    if (left < this.list.length && this.list[left] < this.list[minIdx]) {
      minIdx = left;
    }

    if (right < this.list.length && this.left[right] < this.list[minIdx]) {
      minIdx = right;
    }

    if (i != minIdx) {
      // Swap
      [this.list[i], this.list[minIdx]] = [this.list[minIdx], this.list[i]];
      this.heapify(minIdx);
    }
  }

  remove() {
    [this.list[0], this.list[this.list.length - 1]] = [
      this.list[this.list.length - 1],
      this.list[0],
    ];
    this.list.pop();
    this.heapify(0);
  }
}
