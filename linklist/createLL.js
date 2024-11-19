// In JS we have to implement LinkList manually

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      // FirstNode of LL
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addFirst(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  add(idx, data) {
    if (idx === 0) {
      this.addFirst(data);
      return;
    }
    const newNode = new Node(data);
    let temp = this.head;
    let i = 0;
    while (i < idx - 1) {
      temp = temp.next;
    }
    // Add node
    const nextNode = temp.next;
    temp.next = newNode;
    newNode.next = nextNode;
    this.size++;
  }

  removeFirst() {
    if (this.size === 0) {
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
      this.size = 0;
      return;
    }
    let temp = this.head;
    while (temp.next != this.tail) {
      temp = temp.next;
    }
    temp.next = null;
    tail = temp;
    this.size--;
  }

  search(key) {
    let temp = this.head;
    let idx = 0;
    while (temp != null) {
      if (temp.data === key) {
        return idx;
      }
      temp = temp.next;
      idx++;
    }
    return -1;
  }

  reverseLL() {
    let temp = this.head;
    let prev = null;
    let next = null;
    while (temp != null) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
  }

  removeNthNodeFromLast(n) {
    if (n === this.size) {
      this.head = this.head.next;
      return;
    }
    let temp = this.head;
    let num = this.size - n;
    let i = 1;
    while (i < num) {
      temp = temp.next;
      i++;
    }

    temp.next = temp.next.next;
  }

  findMiddle() {
    let fast = this.head; // Hare
    let slow = this.head; // Turtle
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverseSecondHalfOfLL(node) {
    let prev = null;
    let curr = node;
    let next = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  isPalindrome() {
    // Find middle
    let middle = this.findMiddle();

    // Reverse second half
    let secondHalf = this.reverseSecondHalfOfLL(middle);

    // Compare both half of LL
    let left = this.head;
    while (secondHalf != null) {
      if (left.data != secondHalf.data) return false;
      left = left.next;
      secondHalf = secondHalf.next;
    }
    return true;
  }

  detectCycleInLL() {
    // Floyd's algo
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        // Its mean there is a cycle in LL
        return true;
      }
    }

    return false;
  }

  removeCycleInLL() {
    let slow = this.head;
    let fast = this.head;

    let isCycleExist = false;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        isCycleExist = true;
        break;
      }
    }

    if (!isCycleExist) return false;

    slow = this.head;

    let prev = null;

    while (slow != fast) {
      slow = slow.next;
      prev = fast;
      fast = fast.next;
    }

    if (prev != null) {
      prev.next = null;
      return;
    }

    // If fast and slow meet on head

    let temp = this.head.next;
    let prevOf = null;

    while (temp != this.head) {
      prevOf = temp;
      temp = temp.next;
    }

    prevOf.next = null;
  }

  retainMNode(m, n) {
    let countOfM = 1;
    let temp = this.head;

    while (temp != null) {
      if (countOfM === m) {
        countOfM = 0;
        let currNode = temp;
        let traverseNNode = 0;
        while (currNode != null && traverseNNode < n) {
          currNode = currNode.next;
          traverseNNode++;
        }
        // console.log({ currNode, temp });
        temp.next = currNode ? currNode.next : null;
      } else {
        countOfM++;
        temp = temp.next;
      }
    }
  }

  swappingNodes(x, y) {
    let xPrev = null;
    let yPrev = null;
    let xNext = null;
    let yNext = null;
    let i = 1;
    let temp = this.head;
    while (temp != null) {
      if (i < x) {
        xPrev = temp;
      }
      if (i < y) {
        yPrev = temp;
      }
      temp = temp.next;
      i++;
    }
    xNext = xPrev != null ? xPrev.next.next : this.head.next;
    yNext = yPrev.next.next;

    let currXNode = xPrev === null ? this.head : xPrev.next;
    let currYNode = yPrev.next;

    if (xNext === currYNode) {
      if (xPrev === null) {
        currYNode.next = currXNode;
        currXNode.next = yNext;
        this.head = currYNode;
      } else {
        xPrev.next = currYNode;
        currYNode.next = currXNode;
        currXNode.next = yNext;
      }
    } else if (xPrev == null) {
      currYNode.next = xNext;
      yPrev.next = currXNode;
      currXNode.next = yNext;
      this.head = currYNode;
    } else {
      xPrev.next = currYNode;
      currYNode.next = xNext;
      yPrev.next = currXNode;
      currXNode.next = yNext;
    }
  }

  oddEvenLinkList() {
    let evenNode = new Node(0);
    let oddNode = new Node(1);
    let tempEvent = evenNode;
    let tempOdd = oddNode;

    let tempHead = this.head;

    while (tempHead != null) {
      if (tempHead.data % 2 === 0) {
        tempEvent.next = tempHead;
        tempEvent = tempEvent.next;
      } else {
        tempOdd.next = tempHead;
        tempOdd = tempOdd.next;
      }

      tempHead = tempHead.next;
    }

    tempEvent.next = null;
    tempOdd.next = null;

    tempEvent.next = oddNode.next;

    return evenNode.next;
  }

  intersectionPointInLL(headOne, headTwo) {
    let temp1 = headOne;

    while (temp1 != null) {
      let temp2 = headTwo;
      while (temp2 != null) {
        if (temp1 === temp2) return temp1;
        temp2 = temp2.next;
      }
      temp1 = temp1.next;
    }

    return null;
  }

  print() {
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(`${temp.data} `);
      // console.log({data: temp.data, next: temp.next});
      // console.log(temp.data);
      temp = temp.next;
    }
    console.log();
  }
}

const LL = new LinkList(); // Instance of LL
// LL.addLast(1);
// LL.addLast(3);
// LL.addLast(1);
// LL.addLast(3);
// LL.addLast(1);
// LL.add(1, 4);
// LL.print(); //null 1->4->3->5 ===
// LL.removeFirst();
// LL.removeLast();
// LL.print();
// console.log(LL.search(9));
// console.log(LL.size);
// LL.reverseLL();
// LL.print();
// LL.removeNthNodeFromLast(5);
// LL.print();
// console.log(LL.isPalindrome());

// LL.addLast(8);
// LL.addLast(12);
// LL.addLast(10);
// LL.addLast(5);
// LL.addLast(4);
// LL.addLast(1);
// LL.addLast(6);
// LL.addLast(8);

// LL.tail.next = LL.head.next.next.next;
// LL.tail.next = LL.head;

// LL.print();
// console.log(LL.detectCycleInLL());

// LL.removeCycleInLL();

// console.log(LL.detectCycleInLL());
// LL.print();

// LL.retainMNode(3, 2);
// LL.print();
// LL.print();
// LL.swappingNodes(1, 8);
// LL.print();

// Odd event LL
// LL.addLast(2);
// LL.addLast(4);
// LL.addLast(6);
// LL.addLast(8);
// LL.print();
// LL.head = LL.oddEvenLinkList();
// LL.print();

// Intersection point
let head1, head2;
head1 = new Node(10);
head2 = new Node(3);

let newNode = new Node(6);
head2.next = newNode;
newNode = new Node(9);
head2.next.next = newNode;
newNode = new Node(15);
head1.next = newNode;
head2.next.next.next = newNode;

newNode = new Node(30);
head1.next.next = newNode;
head1.next.next.next = null;
LL.head = head1;
LL.print();
LL.head = head2;
LL.print();
const ans = LL.intersectionPointInLL(head1, head2);
console.log(ans);
