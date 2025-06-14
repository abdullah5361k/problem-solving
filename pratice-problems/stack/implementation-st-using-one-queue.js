class Stack {
  constructor() {
    this.q1 = [];
  }

  isEmpty() {
    return this.q1.length === 0;
  }

  push(x) {
    this.q1.push(x);
    for (let i = 0; i < this.q1.length - 1; i++) {
      this.q1.push(this.q1.shift());
    }
  }

  pop() {
    if (this.isEmpty()) return -1;
    return this.q1.shift();
  }

  peek() {
    if (this.isEmpty()) return -1;
    return this.q1[0];
  }
}
