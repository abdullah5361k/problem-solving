const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  let isCycle = false;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      isCycle = true;
      break;
    }
  }

  if (!isCycle) return null;
  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
