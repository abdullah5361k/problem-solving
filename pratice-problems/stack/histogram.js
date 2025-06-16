const largestRectangleArea = (heights) => {
  let n = heights.length;
  const leftSmaller = new Array(n);
  const rightSmaller = new Array(n);

  let st = [];
  for (let i = 0; i < n; i++) {
    while (st.length && heights[i] <= heights[st[st.length - 1]]) {
      st.pop();
    }
    if (st.length == 0) {
      leftSmaller[i] = 0;
    } else {
      leftSmaller[i] = st[st.length - 1] + 1;
    }
    st.push(i);
  }

  st = [];
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && heights[i] <= heights[st[st.length - 1]]) {
      st.pop();
    }
    if (st.length === 0) {
      rightSmaller[i] = n - 1;
    } else {
      rightSmaller[i] = st[st.length - 1] - 1;
    }
    st.push(i);
  }

  let maxRect = -Infinity;

  for (let i = 0; i < n; i++) {
    maxRect = Math.max(
      (rightSmaller[i] - leftSmaller[i] + 1) * heights[i],
      maxRect
    );
  }

  return maxRect;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
