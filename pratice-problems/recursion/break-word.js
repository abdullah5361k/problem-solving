// const wordBreak = (s, wordDict) => {
//   let breakW = "";
//   for (let i = 0; i < s.length; i++) {
//     breakW += s[i];
//     for (let j = 0; j < wordDict.length; j++) {
//       if (breakW === wordDict[j]) {
//         breakW = "";
//       }
//     }
//   }
//   return breakW.length === 0 ? true : false;
// };

// wordBreak("aaaaaaa", ["aaaa", "aaa"]);

var wordBreak = function (s, wordDict) {
  let n = s.length;
  let bW = [];
  let i = 0;
  let j = 0;

  while (i >= j) {
    let str = "";
    if (i < n) {
      str += s.slice(j, i + 1);
      i++;
    } else {
      str += s.slice(j, i);
    }
    // Is it part of Word DICT
    for (let k = 0; k < wordDict.length; k++) {
      if (str === wordDict[k]) {
        // bW = [Math.min(bW[0], j), Math.max(bW[1], i)];
        bW.push([j, i - 1]);
      }
    }

    if (i === n) {
      j++;
    }
  }

  console.log(bW);
  for (let i = 1; i < bW.length; i++) {
    if (bW[i][0] - bW[i - 1][1] > 1) return false;
  }

  return bW[0][0] === 0 && bW[bW.length - 1][1] >= n - 1 ? true : false;

  //   return bW[0] === 0 && bW[1] === n ? true : false;
};

console.log(wordBreak("applepenapple", ["apple", "pen"]));
