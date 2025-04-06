/**
 * @param {number[][]} grid
 * @return {number}
 */

const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (grid) => {
  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  let queue = [];
  let countOfFreshOranges = 0;
  let noOfMinutes = 0;

  // Add rotted oranges into queue
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]); // Rotted orange
      else if (grid[i][j] === 1) countOfFreshOranges++; // Fresh orange
    }
  }

  while (queue.length) {
    const next = [];
    let head = 0;

    while (head < queue.length) {
      const [r, c] = queue[head++];

      // If there is any fresh orange in it's four direction than it will be is affected
      for (let i = 0; i < 4; i++) {
        const nR = r + row[i];
        const nC = c + col[i];
        if (
          isValid(nR, nC, grid.length, grid[0].length) &&
          grid[nR][nC] === 1
        ) {
          countOfFreshOranges--;
          grid[nR][nC] = 2;
          next.push([nR, nC]);
        }
      }
    }

    queue = next;
    if (next.length) noOfMinutes += 1;
  }

  return countOfFreshOranges ? -1 : noOfMinutes;
};

const orangesRotting = (grid) => {
  return BFS(grid);
};

const grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];

console.log(orangesRotting(grid));
