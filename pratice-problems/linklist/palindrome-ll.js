const reverseLL = (head) => {
  let curr = head;
  let next = null;
  let prev = null;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const isPalindrome = (head) => {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let l2 = reverseLL(slow.next);
  while (head != null && l2 != null) {
    if (head.val != l2.val) return false;
    head = head.next;
    l2 = l2.next;
  }
  return true;
};
