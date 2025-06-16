class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DubleLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const node = new Node(data);
    this.size += 1;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    return node;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.mp1 = new Map();
  this.mp2 = new Map();
  this.size = 0;
  this.minFreq = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.mp1.has(key)) return -1;
  const { newNode, freq } = this.mp1.get(key);
  const ll = this.mp2.get(freq);
  let { value } = newNode.data;
  if (ll.size === 1) {
    if (freq === this.minFreq) this.minFreq += 1;
    ll.head = null;
    ll.tail = null;
    ll.size = 0;
  } else if (ll.tail == newNode) {
    const removedNode = ll.tail;
    ll.tail = ll.tail.prev;
    ll.tail.next = null;
    removedNode.prev = null; // Clean up reference
    ll.size -= 1;
  } else if (ll.head === newNode) {
    const removedNode = ll.head;
    ll.head = ll.head.next;
    ll.head.prev = null;
    removedNode.next = null;
    ll.size -= 1;
  } else {
    newNode.prev.next = newNode.next;
    newNode.next.prev = newNode.prev;
    ll.size -= 1;
  }
  newNode.next = null;
  newNode.prev = null;
  if (this.mp2.has(freq + 1)) {
    const ll = this.mp2.get(freq + 1);
    const newNode = ll.add({ key, value });
    this.mp1.set(key, { newNode, freq: freq + 1 });
  } else {
    const ll = new DubleLL();
    const newNode = ll.add({ key, value });
    this.mp2.set(freq + 1, ll);
    this.mp1.set(key, { newNode, freq: freq + 1 });
  }

  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  let frq = 1;
  if (this.mp1.has(key)) {
    const { newNode, freq } = this.mp1.get(key);
    const ll = this.mp2.get(freq);

    if (ll.size === 1) {
      if (freq === this.minFreq) this.minFreq += 1;
      ll.head = null;
      ll.tail = null;
      ll.size = 0;
    } else if (ll.tail == newNode) {
      const removedNode = ll.tail;
      ll.tail = ll.tail.prev;
      ll.tail.next = null;
      removedNode.prev = null; // Clean up reference
      ll.size -= 1;
    } else if (ll.head === newNode) {
      const removedNode = ll.head;
      ll.head = ll.head.next;
      ll.head.prev = null;
      removedNode.next = null;
      ll.size -= 1;
    } else {
      newNode.prev.next = newNode.next;
      newNode.next.prev = newNode.prev;
      ll.size -= 1;
    }
    newNode.next = null;
    newNode.prev = null;
    frq = freq + 1;
  } else if (this.mp1.size >= this.capacity) {
    const ll = this.mp2.get(this.minFreq);
    // return;/
    let key = null;
    if (ll.size == 1) {
      this.minFreq += 1;
      key = ll.head.data.key;
      ll.head = null;
      ll.tail = null;
      ll.size = 0;
    } else {
      key = ll.tail.data.key;
      const removedNode = ll.tail;
      ll.tail = ll.tail.prev;
      ll.tail.next = null;
      removedNode.prev = null; // Clean up reference
      ll.size -= 1;
    }
    this.mp1.delete(key);
  }
  if (this.mp2.has(frq)) {
    const ll = this.mp2.get(frq);
    const newNode = ll.add({ key, value });
    this.mp1.set(key, { newNode, freq: frq });
  } else {
    const ll = new DubleLL();
    const newNode = ll.add({ key, value });
    this.mp2.set(frq, ll);
    this.mp1.set(key, { newNode, freq: frq });
  }
  this.minFreq = frq === 1 ? 1 : this.minFreq;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// ["LFUCache","put","put","put","put","get"]
// [[2],[3,1],[2,1],[2,2],[4,4],[2]]

const obj = new LFUCache(2);
obj.put(3, 1);
obj.put(2, 1);
obj.put(2, 2);
obj.put(4, 4);
console.log(obj.get(2));
