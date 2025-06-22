const repeatedStringMatch = (a, b) => {
  let times = Math.ceil(b.length / a.length);
  let repeated = a.repeat(times);

  if (repeated.includes(b)) return times;
  if ((repeated + a).includes(b)) return times + 1;

  return -1;
};

repeatedStringMatch("cdabcdab", "abcd");
