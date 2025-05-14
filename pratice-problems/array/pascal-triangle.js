const generatePascal = (numRows) => {
  const array = [];
  array.push([1]);

  for (let i = 1; i < numRows; i++) {
    const ar = [];
    ar.push(1);
    for (let j = 1; j < i; j++) {
      const sum = array[i - 1][j - 1] + array[i - 1][j];
      ar.push(sum);
    }
    ar.push(1);
    array.push(ar);
  }

  return array;
};

console.log(generatePascal(6));
