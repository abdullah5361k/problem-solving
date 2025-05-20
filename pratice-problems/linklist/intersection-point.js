const getIntersectionNode = (headA, headB) => {
  const mp = new Map();
  while (headA != null) {
    mp.set(headA, true);
    headA = headA.next;
  }
  while (headB != null) {
    if (mp.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};
