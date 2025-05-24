const findMaxConsecutiveOnes = (arr) => {
  let countOfOnes = 0;
  let maxCountOfOnes = Math.max();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      maxCountOfOnes = Math.max(maxCountOfOnes, countOfOnes);
      countOfOnes = 0;
    } else {
      countOfOnes++;
    }
  }

  return Math.max(maxCountOfOnes, countOfOnes);
};
