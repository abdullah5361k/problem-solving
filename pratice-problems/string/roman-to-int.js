const romanToInt = (s) => {
  let result = 0;
  let n = s.length;
  const romanSys = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < n; i++) {
    const curr = romanSys[s[i]];
    const next = romanSys[s[i + 1]];

    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }

  return result;
};
