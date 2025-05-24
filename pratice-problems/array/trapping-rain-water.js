const trap = (height) => {
  let n = height.length;
  let leftGreaterEl = [height[0]];
  let rightGreaterEl = [];
  rightGreaterEl[n - 1] = height[n - 1];
  for (let i = 1; i < n; i++) {
    leftGreaterEl[i] = Math.max(height[i], leftGreaterEl[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    rightGreaterEl[i] = Math.max(height[i], rightGreaterEl[i + 1]);
  }

  let totalRainTrappingWater = 0;

  for (let i = 0; i < n; i++) {
    let minElevationHt = Math.min(leftGreaterEl[i], rightGreaterEl[i]);
    totalRainTrappingWater += minElevationHt - height[i];
  }

  return totalRainTrappingWater;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

trap(height);

const trapped = (height) => {
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let result = 0;
  let leftM = 0;
  let rightM = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      leftM = Math.max(height[left], leftM);
      result += leftM - height[left];
      left++;
    } else {
      rightM = Math.max(height[right], rightM);
      result += rightM - height[right];
      right--;
    }
  }

  return result;
};
