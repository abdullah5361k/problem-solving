class Queue {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(data) {
    return this.list.push(data);
  }

  remove() {
    if (this.isEmpty()) return null;
    return this.list.shift();
  }
}
