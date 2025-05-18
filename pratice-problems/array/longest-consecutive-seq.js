const longestConsecutive = (nums) => {
  const mp = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    mp.set(nums[i], true);
  }

  let longestSeq = 0;

  for (let i = 0; i < n; i++) {
    let el = nums[i];
    // If el is a starting
    if (!mp.has(el - 1)) {
      // Find consecutive ones
      let seq = 0;
      while (mp.has(el)) {
        seq++, el++;
      }
      longestSeq = Math.max(seq, longestSeq);
    }
  }

  return longestSeq;
};
