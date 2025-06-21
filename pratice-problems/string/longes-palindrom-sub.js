const longestPalindrome = (s) => {
  if (!s || s.length === 1) return s;

  let start = 0;
  let maxLength = 0;

  const expandMid = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }

      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandMid(i, i); // Odd length -> "aba";
    expandMid(i, i + 1); // Even length -> "abab";
  }

  return s.substring(start, start + maxLength);
};
