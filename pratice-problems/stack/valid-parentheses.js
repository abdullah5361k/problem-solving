const isValid = (s) => {
  const st = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      st.push(ch);
    } else {
      const openB = st.pop();

      if (!openB) return false;

      if (openB === "(" && ch != ")") return false;
      else if (openB === "{" && ch != "}") return false;
      else if (openB === "[" && ch != "]") return false;
    }
  }

  return st.length === 0;
};
