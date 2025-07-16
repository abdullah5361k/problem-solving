const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (hospital) => {
  let queue = [];
  const n = hospital.length;
  const m = hospital[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (hospital[i][j] === 2) queue.push([i, j]);
    }
  }

  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  let idx = 0;
  let unitTime = 0;

  while (queue.length) {
    const next = [];

    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue[i];
      for (let k = 0; k < 4; k++) {
        const nR = r + row[k];
        const nC = c + col[k];
        if (isValid(nR, nC, n, m) && hospital[nR][nC] === 1) {
          hospital[nR][nC] = 2;
          next.push([nR, nC]);
        }
      }
    }

    queue = next;
    if (next.length) unitTime++;
  }

  // If there is any uneffected patient remain in hospital than return -1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (hospital[i][j] === 1) return -1;
    }
  }

  return unitTime;
};

const helpaterp = (hospital) => {
  return BFS(hospital);
};
