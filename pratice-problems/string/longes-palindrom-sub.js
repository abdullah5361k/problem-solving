/**
 * @param {string} s
 * @return {string}
 */

const isPalindrome = (s, i, j) => {
  while (i <= j) {
    if (s[i] != s[j]) return false;
    i++, j--;
  }
  return true;
};

var longestPalindrome = function (s) {
  let i = 0;
  let j = 1;
  let ans = "";
  let maxLen = 0;

  while (j < s.length) {
    const isPalin = isPalindrome(s, i, j);
    if (isPalin) {
      if (j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        ans = s.slice(i, j + 1);
      }
      j++;
    } else {
      i++;
    }
  }

  return ans;
};

longestPalindrome("babad");
