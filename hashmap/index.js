class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(key, value) {
    if (this.head === null) {
      this.head = this.tail = new Node(key, value);
      return;
    }

    this.tail.next = new Node(key, value);
    this.tail = this.tail.next;
  }

  remove(key) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.key === key) {
        // If current node is head
        if (!prev) {
          this.head = current.next;
          if (this.head == null) {
            this.tail = null;
          }
        } else {
          prev.next = current.next;
          if (current.next == null) {
            this.tail = null;
          }
        }

        return true;
      }

      prev = current;
      current = current.next;
    }

    return false;
  }
}

class Hashmap {
  constructor() {
    this.size = 0;
    this.bucket = new Array(4);

    for (let i = 0; i < this.bucket.length; i++) {
      this.bucket[i] = new LinkedList();
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.bucket.length;
  }

  searchInLL(key, idx) {
    const ll = this.bucket[idx].head;

    while (ll != null) {
      if (ll.key === key) return ll;
      ll = ll.next;
    }

    return -1;
  }

  resize() {
    const oldBucket = this.bucket;
    this.bucket = new Array(oldBucket.length * 2);
    this.size = 0;

    for (let i = 0; i < this.bucket.length; i++) {
      this.bucket[i] = new LinkedList();
    }

    for (let i = 0; i < oldBucket; i++) {
      const currentLL = oldBucket[i];
      while (currentLL != null) {
        this.put(currentLL.key, currentLL.value);
        currentLL = currentLL.next;
      }
    }
  }

  put(key, value) {
    const bi = this._hash(key);
    const isKeyFoundInLL = this.searchInLL(key, bi);

    if (isKeyFoundInLL === -1) {
      const ll = this.bucket[bi];
      ll.add(key, value);
      this.size++;
    } else {
      isKeyFoundInLL.value = value;
    }

    // If size more than threashold
    if (this.size / this.bucket.length > 0.75) {
      this.resize();
    }
  }

  get(key) {
    const bi = this._hash(key);
    const keypair = this.searchInLL(key, bi);

    return keypair === -1 ? undefined : keypair.value;
  }

  remove(key) {
    const bi = this._hash(key);

    const ll = this.bucket[bi];
    return ll.remove(key);
  }
}

const hp = new Hashmap();

hp.put("India", 500);

hp.put("Pakistan", 100);
console.log(hp);
hp.remove("India");
console.log(hp);
