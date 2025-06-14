class Queue {
  constructor() {
    this.qu = [];
  }

  isEmpty() {
    return this.qu.length === 0;
  }

  add(data) {
    this.qu.push(data);
  }

  remove() {
    if (this.isEmpty()) return -1;
    return this.qu.shift();
  }

  peek() {
    if (this.isEmpty()) return -1;
    return this.qu[0];
  }

  size() {
    return this.qu.length;
  }
}

function main() {
  const q = new Queue();

  q.add(1);
  q.add(2);
  q.add(3);

  while (!q.isEmpty()) {
    console.log(q.remove());
  }
}

main();
