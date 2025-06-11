const mergeTwoLists = (list1, list2) => {
  let dummyNode = new ListNode(-1);
  let temp = dummyNode;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  while (list1 != null) {
    temp.next = list1;
    temp = temp.next;
    list1 = list1.next;
  }

  while (list2 != null) {
    temp.next = list2;
    temp = temp.next;
    list2 = list2.next;
  }

  temp.next = null;

  return dummyNode.next;
};
