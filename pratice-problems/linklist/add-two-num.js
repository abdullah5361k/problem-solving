var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(-1);
  let temp = dummyNode;
  let carry = 0;

  while (l1 != null || l2 != null || carry != 0) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    temp.next = new ListNode(Math.floor(sum % 10));
    temp = temp.next;
    carry = Math.floor(sum / 10);
  }

  return dummyNode.next;
};
