class Stack {
  constructor() {
    this.st = [];
  }

  isEmpty() {
    return this.st.length === 0;
  }

  push(data) {
    this.st.push(data);
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

function main() {
  const st = new Stack();

  st.push(1);
  st.push(2);
  st.push(3);

  while (!st.isEmpty()) {
    console.log(st.pop());
  }
}

main();
