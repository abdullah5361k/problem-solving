const lengthOfLongestSubstring = (s) => {
  if (s == " ") return 1;

  const freq = new Array(26).fill(false);
  let i = 0;
  let j = 0;
  let subLength = 0;
  let maxSubLength = 0;
  while (j < s.length) {
    const elIdx = s.charCodeAt(j) - "a".charCodeAt(0);
    if (freq[elIdx]) {
      while (s[i] != s[j]) {
        const idx = s.charCodeAt(i) - "a".charCodeAt(0);
        freq[idx] = false;
        i++;
      }
      subLength = j - i;
      i++;
    } else {
      freq[elIdx] = true;
      subLength++;
    }
    j++;
    maxSubLength = Math.max(maxSubLength, subLength);
  }

  return maxSubLength;
};

lengthOfLongestSubstring("tmmzuxt");
