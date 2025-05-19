const reverseList = (head) => {
  let curr = head;
  let next = head;
  let prev = null;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
};
