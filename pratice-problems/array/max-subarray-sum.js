const maxSubArraySum = (array) => {
  const prefixSum = [];
  let sum = 0;
  let maxSubArraySum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    prefixSum[i] = sum;
    maxSubArraySum = Math.max(maxSubArraySum, sum);
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let calculateSubarraySum = prefixSum[j] - prefixSum[i - 1];
      maxSubArraySum = Math.max(maxSubArraySum, calculateSubarraySum);
    }
  }

  console.log(maxSubArraySum);
};

const maxSumUsingKadaneAlgo = (nums) => {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};
