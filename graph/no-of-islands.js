const makeIsland = (grid, i, j, r, c) => {
  let row = [-1, 1, 0, 0, -1, -1, 1, 1];
  let col = [0, 0, -1, 1, -1, 1, -1, 1];

  grid[i][j] = 0;
  const queue = [];
  queue.push({ i, j });

  let head = 0;

  while (head < queue.length) {
    const { i, j } = queue[head++];

    for (let k = 0; k < 8; k++) {
      if (
        isValid(i + row[k], j + col[k], r, c) &&
        grid[i + row[k]][j + col[k]] === 1
      ) {
        grid[i + row[k]][j + col[k]] = 0;
        queue.push({ i: i + row[k], j: j + col[k] });
      }
    }
  }
};

function isValid(i, j, row, col) {
  return i >= 0 && i < row && j >= 0 && j < col;
}

const countNoOfIslands = (grid) => {
  let row = grid.length;
  let col = grid[0].length;
  let noOfIsland = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        noOfIsland += 1;
        makeIsland(grid, i, j, row, col);
      }
    }
  }

  return noOfIsland;
};

const grid = [
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0],
];

console.log(countNoOfIslands(grid));
