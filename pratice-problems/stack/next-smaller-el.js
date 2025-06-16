const nextSmallerElement = (arr) => {
  const st = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (st.length && st[st.length - 1] >= arr[i]) {
      st.pop();
    }
    let el = arr[i];
    if (st.length == 0) {
      arr[i] = -1;
    } else {
      arr[i] = st[st.length - 1];
      st.pop();
    }
    st.push(el);
  }
};
nextSmallerElement([5, 6, 2, 3, 1, 7]);
