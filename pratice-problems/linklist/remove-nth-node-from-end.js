const calSizeOfLL = (head) => {
  let size = 0;
  let curr = head;
  while (curr != null) {
    curr = curr.next;
    size++;
  }
  return size;
};

const removeNthNodeFromEndOfLL = (head, n) => {
  if (head === null || head.next === null) return null;
  const sizeOfLL = calSizeOfLL(head);
  let nthNode = sizeOfLL - n - 1;

  curr = head;
  while (nthNode--) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
  return head;
};
