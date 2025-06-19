/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  let ans = "";

  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (temp === " ") continue;
      ans = ans.length === 0 ? temp : temp + " " + ans;
      temp = "";
    } else {
      temp += s[i];
    }
  }

  ans = temp + " " + ans;

  return ans;
};

reverseWords("a good   example");
