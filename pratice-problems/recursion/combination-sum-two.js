const combinationSum = (idx, candidates, target, st, res, picked) => {
  if (target == 0) {
    if (!st.has(picked.toString())) {
      res.push([...picked]);
    }
    st.add(picked.toString());
    return;
  }
  if (idx === candidates.length || target < 0) return;

  picked.push(candidates[idx]);
  combinationSum(
    idx + 1,
    candidates,
    target - candidates[idx],
    st,
    res,
    picked
  );
  picked.pop();
  combinationSum(idx + 1, candidates, target, st, res, picked);
};

const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b);
  const res = [];
  const st = new Set();
  combinationSum(0, candidates, target, st, res, []);
  return res;
};
