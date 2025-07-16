const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (mat) => {
  const n = mat.length;
  const m = mat[0].length;

  let queue = [];
  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (mat[i][j] === 2) queue.push([i, j]);

  let timeTaken = 0;

  while (queue.length) {
    const next = [];

    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue[i];

      for (let k = 0; k < 4; k++) {
        const nR = r + row[k];
        const nC = c + col[k];
        if (this.isValid(nR, nC, n, m) && mat[nR][nC] === 1) {
          mat[nR][nC] = 2;
          next.push([nR, nC]);
        }
      }
    }

    queue = next;
    if (next.length) timeTaken++;
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (mat[i][j] === 1) return -1;

  return timeTaken;
};

const orangesRotting = (mat) => {
  return BFS(mat);
};
