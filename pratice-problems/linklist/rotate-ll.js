const sizeOfLL = (head) => {
  let temp = head;
  let size = 0;
  while (temp != null) {
    temp = temp.next;
    size++;
  }
  return size;
};

const rotateLL = (head, size, k) => {
  let curr = head;
  for (let i = 0; i < size - k - 1; i++) {
    curr = curr.next;
  }
  let nextHead = curr.next;
  curr.next = null;
  const dummy = new ListNode(-1);
  let temp = dummy;
  while (nextHead != null) {
    temp.next = nextHead;
    nextHead = nextHead.next;
    temp = temp.next;
  }
  temp.next = head;
  return dummy.next;
};

const rotateRight = (head, k) => {
  let size = sizeOfLL(head);
  if (size == 0 || size === k) return head;
  k = Math.floor(k % size);
  return rotateLL(head, size, k);
};
