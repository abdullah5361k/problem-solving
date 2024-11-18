class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  pop() {
    if (this.isEmpty()) return null;
    let top = this.head;
    this.head = this.head.next;
    return top.data;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head.data;
  }
}

class Queue {
  constructor() {
    this.st1 = new Stack();
    this.st2 = new Stack();
  }

  isEmpty() {
    return this.st1.isEmpty();
  }

  add(data) {
    if (this.st1.isEmpty()) {
      this.st1.push(data);
      return;
    }
    while (!this.st1.isEmpty()) {
      this.st2.push(this.st1.pop());
    }

    this.st1.push(data);

    while (!this.st2.isEmpty()) {
      this.st1.push(this.st2.pop());
    }
  }

  remove() {
    if (this.st1.isEmpty()) return null;
    return this.st1.pop();
  }

  peek() {
    if (this.st1.isEmpty()) return null;
    return this.st1.peek();
  }
}

const q1 = new Queue();

q1.add(1);
q1.add(2);
q1.add(3);

while (!q1.isEmpty()) {
  console.log(q1.remove());
}
