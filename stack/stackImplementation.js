class Stack {
  constructor() {
    this.list = [];
  }

  // Is empty
  isEmpty() {
    return this.list.length === 0;
  }

  // add element in stack
  push(data) {
    this.list.push(data);
  }

  // Remove element
  pop() {
    return this.list.pop();
  }

  // See top element
  peek() {
    if (this.isEmpty) return -1;
    return this.list[this.list.length - 1];
  }
}
