class Node {
  constructor(data) {
    this.data = data;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;

    this.tail = newNode;
  }

  remove() {
    if (this.isEmpty()) return null;

    let node = this.head;
    if (this.tail === this.head) {
      this.tail = this.head = null;
    } else {
      this.head = this.head.next;
    }
    return node.data;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.head.data;
  }
}
const q = new Queue();

q.add(1);
q.add(2);
q.add(3);

while (!q.isEmpty()) {
  console.log(q.remove());
}
