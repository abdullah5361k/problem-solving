const sortList = (leftList, rightList) => {
  let dummyNode = new Node(-1);
  let temp = dummyNode;

  while (leftList != null && rightList != null) {
    if (leftList.data <= rightList.data) {
      temp.bottom = leftList;
      leftList = leftList.bottom;
    } else {
      temp.bottom = rightList;
      rightList = rightList.bottom;
    }
    temp = temp.bottom;
  }

  while (leftList != null) {
    temp.bottom = leftList;
    leftList = leftList.bottom;
    temp = temp.bottom;
  }

  while (rightList != null) {
    temp.bottom = rightList;
    rightList = rightList.bottom;
    temp = temp.bottom;
  }

  temp.bottom = null;

  return dummyNode.bottom;
};

const mergeSort = (si, ei, list) => {
  if (si >= ei) return list[si];

  let mid = Math.floor((si + ei) / 2);
  let leftHead = mergeSort(si, mid, list);
  let rightHead = mergeSort(mid + 1, ei, list);
  return sortList(leftHead, rightHead);
};

const flatten = (root) => {
  // your code here
  const list = [];
  let temp = root;
  let nxt;
  while (temp != null) {
    nxt = temp.next;
    temp.next = null;
    list.push(temp);
    temp = nxt;
  }

  return mergeSort(0, list.length - 1, list);
};
