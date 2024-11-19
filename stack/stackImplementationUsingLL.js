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
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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

const st = new Stack();

st.push(1);
st.push(2);
st.push(3);

// console.log(st.isEmpty());
// console.log(st.peek());
// console.log(st.pop());

// Push at the bottom
const pushAtBottom = (st, data) => {
  // O(n)
  if (st.isEmpty()) {
    st.push(data);
    return;
  }
  let top = st.pop();
  pushAtBottom(st, data);
  st.push(top);
};
// pushAtBottom(st, 4);

const reverseString = (str) => {
  let st = new Stack();
  let idx = 0;
  while (idx < str.length) {
    st.push(str.charAt(idx));
    idx++;
  }
  let result = "";
  while (!st.isEmpty()) {
    result += st.pop();
  }

  return result;
};

// console.log(reverseString("abdullah"));

const pushAtBottomOfStack = (st, bottom) => {
  if (st.isEmpty()) {
    st.push(bottom);
    return;
  }

  let top = st.pop();

  pushAtBottom(st, bottom);
  st.push(top);
};

const reverseStack = (st) => {
  if (st.isEmpty()) return;

  let top = st.pop();
  reverseStack(st);
  pushAtBottom(st, top);
};

const stockSpan = (stocks) => {
  let span = [];

  const st = new Stack();

  for (let i = 0; i < stocks.length; i++) {
    if (st.isEmpty()) {
      span[i] = i + 1;
      st.push(i);
    } else {
      while (!st.isEmpty() && stocks[st.peek()] < stocks[i]) {
        st.pop();
      }
      if (st.isEmpty()) {
        span[i] = i + 1;
      } else {
        span[i] = i - st.peek();
      }
      st.push(i);
    }
  }

  return span;
};
// const spanArr = stockSpan([100, 80, 60, 70, 60, 85, 100]);

// console.log(spanArr);

const nextGreaterElement = (arr) => {
  const next = [];

  const st = new Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (st.isEmpty()) {
      next[i] = -1;
    } else {
      while (!st.isEmpty() && st.peek() < arr[i]) {
        st.pop();
      }
      if (st.isEmpty()) {
        next[i] = -1;
      } else {
        next[i] = st.peek();
      }
    }
    st.push(arr[i]);
  }
  return next;
};

// console.log(nextGreaterElement([6, 8, 0, 1, 3]));

const isValidParenthesis = (str) => {
  const st = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "(" ||
      str.charAt(i) === "{" ||
      str.charAt(i) === "["
    ) {
      st.push(str.charAt(i));
    } else {
      //   if (st.isEmpty) return false;
      let offBracket = str.charAt(i);
      if (
        (st.peek() == "(" && offBracket == ")") ||
        (st.peek() == "{" && offBracket == "}") ||
        (st.peek() == "[" && offBracket == "]")
      ) {
        st.pop();
      } else {
        return false;
      }
    }
  }

  return st.isEmpty();
};

// console.log(isValidParenthesis("()(()"));

const duplicatesParenthesis = (str) => {
  const st = new Stack();

  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
    } else if (ch == ")" || ch == "}" || ch == "]") {
      let cnt = 0;
      while (
        !st.isEmpty() &&
        !(st.peek() == "(" || st.peek() == "{" || st.peek == "[")
      ) {
        st.pop();
        cnt++;
      }
      if (cnt === 0) return true;
      st.pop();
    } else {
      st.push(ch);
    }
  }

  return false;
};
console.log(duplicatesParenthesis("(((a+b)+(c+d)))"));
