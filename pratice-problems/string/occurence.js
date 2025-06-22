const strStr = (haystack, needle) => {
  let h = haystack.length;
  let n = needle.length;

  if (n === 0) return 0;

  let i = 0;
  let j = 0;

  while (j < h) {
    if (haystack[j] === needle[i]) {
      i++, j++;

      if (i === n) {
        return j - n;
      }
    } else {
      j = j - i + 1;
      i = 0;
    }
  }

  return -1;
};
