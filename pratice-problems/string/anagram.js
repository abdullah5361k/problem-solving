const isAnagram = (s, t) => {
  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    freq[t[i].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
  }

  for (let i = 0; i < 26; i++) {
    if (freq[i] != 0) return false;
  }

  return true;
};
