// const makeIsland = (grid, i, j, r, c) => {
//   let row = [-1, 1, 0, 0, -1, -1, 1, 1];
//   let col = [0, 0, -1, 1, -1, 1, -1, 1];

//   grid[i][j] = 0;
//   const queue = [];
//   queue.push({ i, j });

//   let head = 0;

//   while (head < queue.length) {
//     const { i, j } = queue[head++];

//     for (let k = 0; k < 8; k++) {
//       if (
//         isValid(i + row[k], j + col[k], r, c) &&
//         grid[i + row[k]][j + col[k]] === 1
//       ) {
//         grid[i + row[k]][j + col[k]] = 0;
//         queue.push({ i: i + row[k], j: j + col[k] });
//       }
//     }
//   }
// };

// function isValid(i, j, row, col) {
//   return i >= 0 && i < row && j >= 0 && j < col;
// }

// const countNoOfIslands = (grid) => {
//   let row = grid.length;
//   let col = grid[0].length;
//   let noOfIsland = 0;

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (grid[i][j] === 1) {
//         noOfIsland += 1;
//         makeIsland(grid, i, j, row, col);
//       }
//     }
//   }

//   return noOfIsland;
// };

// const grid = [
//   [0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 1, 1, 0, 1, 0],
// ];

// console.log(countNoOfIslands(grid));

/**
 * @param {string[][]} grid
 * @returns {number}
 */

const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (i, j, grid) => {
  let row = [-1, 1, 0, 0, -1, -1, 1, 1];
  let col = [0, 0, -1, 1, -1, 1, -1, 1];

  const queue = [];
  queue.push([i, j]);
  grid[i][j] = "W";

  let head = 0;

  while (head < queue.length) {
    const [r, c] = queue[head++];

    for (let k = 0; k < 8; k++) {
      const nR = r + row[k];
      const nC = c + col[k];
      if (isValid(nR, nC, grid.length, grid[0].length) && grid[nR][nC] == "L") {
        grid[nR][nC] = "W";
        queue.push([nR, nC]);
      }
    }
  }
};

const noOfIsland = (grid) => {
  let countNofOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "L") {
        countNofOfIslands += 1;
        BFS(i, j, grid);
      }
    }
  }
};
