const generateAllPermutations = (str, result, newStr, n, k, steps) => {
  if (newStr.length === n) {
    steps[0] = steps[0] + 1;
    if (steps[0] === k) {
      result[0] = newStr;
      return true;
    }
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (
      generateAllPermutations(
        str.slice(0, i).concat(str.slice(i + 1)),
        result,
        newStr + str[i],
        n,
        k,
        steps
      )
    )
      return true;
  }

  return false;
};

const getPermutation = (n, k) => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  const result = [""];
  const steps = [0];
  generateAllPermutations(str, result, "", n, k, steps);
  return result[0];
};

console.log(getPermutation(3, 1));
