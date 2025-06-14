class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  isEmpty() {
    return this.q1.length === 0;
  }

  push(x) {
    this.q2.push(x);

    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
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
