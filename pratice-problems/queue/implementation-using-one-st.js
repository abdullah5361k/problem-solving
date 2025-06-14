class Queue {
  constructor() {
    this.st = [];
  }

  isEmpty() {
    return this.st.length === 0;
  }

  push(x) {
    this.st.push(x);

    for (let i = 0; i < this.st.length - 1; i++) {
      this.st.push(this.st.shift());
    }
  }

  pop() {
    if (this.isEmpty()) return -1;
    return this.st.pop();
  }

  peek() {
    if (this.isEmpty()) return -1;
    return this.st[this.st.length - 1];
  }
}
