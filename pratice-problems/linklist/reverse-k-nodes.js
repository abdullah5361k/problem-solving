const sizeOfLL = (head) => {
  let size = 0;
  let temp = head;
  while (temp != null) {
    temp = temp.next;
    size++;
  }
  return size;
};

const reverseLL = (head, k) => {
  let curr = head;
  let next = head;
  let prev = null;
  let i = 0;
  while (curr != null && i < k) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    i++;
  }

  return [prev, head, curr];
};

const reverseKGroup = (head, k) => {
  let size = sizeOfLL(head);
  const dummy = new ListNode(-1);
  let temp = dummy;
  let i = 0;
  let currHead = head;

  while (i + k <= size) {
    const [newHead, newTail, nextHead] = reverseLL(currHead, k, temp);
    temp.next = newHead;
    temp = newTail;
    currHead = nextHead;
    i += k;
  }

  temp.next = currHead;

  return dummy.next;
};
