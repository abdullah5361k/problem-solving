var lengthOfLongestSubstring = function (s) {
  if (s == " ") return 1;

  const freq = new Array(26).fill(false);

  let i = 0;
  let j = 0;
  let subStringLength = 0;
  let maxLength = 0;

  while (j < s.length) {
    const elIdx = s.charCodeAt(j) - "a".charCodeAt(0);
    if (freq[elIdx]) {
      while (s.charCodeAt(i) - "a".charCodeAt(0) != elIdx) freq[i++] = false;
      freq[elIdx] = false;
      subStringLength = j - i;
    }
    freq[elIdx] = true;
    subStringLength++;
    j++;
    maxLength = Math.max(maxLength, subStringLength);
  }

  return Math.max(maxLength, subStringLength);
};

lengthOfLongestSubstring("tmmzuxt");
