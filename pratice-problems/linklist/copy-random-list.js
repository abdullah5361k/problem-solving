const deepCopy = (head) => {
  const mp = new Map();
  let curr = head;
  while (curr != null) {
    mp.set(curr, new _Node(curr.val, null, null));
    curr = curr.next;
  }
  curr = head;
  while (curr != null) {
    let copiedNode = mp.get(curr);
    copiedNode.next = mp.get(curr.next) || null;
    copiedNode.random = mp.get(curr.random) || null;
    curr = curr.next;
  }

  return mp.get(head);
};

const copyRandomList = (head) => {
  return deepCopy(head);
};
