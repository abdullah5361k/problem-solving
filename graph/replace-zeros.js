// function makeZeros(grid, i, j, r, c) {
//   let row = [-1, 1, 0, 0];
//   let col = [0, 0, -1, 1];

//   grid[i][j] = -1;
//   const queue = [];
//   queue.push({ i, j });

//   let head = 0;

//   while (head < queue.length) {
//     const { i, j } = queue[head++];

//     for (let k = 0; k < 4; k++) {
//       if (
//         isValid(i + row[k], j + col[k], r, c) &&
//         grid[i + row[k]][j + col[k]] === "O"
//       ) {
//         grid[i + row[k]][j + col[k]] = -1;
//         queue.push({ i: i + row[k], j: j + col[k] });
//       }
//     }
//   }
// }

// function isValid(i, j, row, col) {
//   return i >= 0 && i < row && j >= 0 && j < col;
// }

// function replace(grid) {
//   let row = grid.length;
//   let col = grid[0].length;

//   //  Traverse top row
//   for (let j = 0; j < col; j++) {
//     if (grid[0][j] === "O") makeZeros(grid, 0, j, row, col);
//   }

//   //  Traverse bottom row
//   for (let j = 0; j < col; j++) {
//     if (grid[row - 1][j] === "O") makeZeros(grid, row - 1, j, row, col);
//   }

//   //  Traverse on Left Col
//   for (let i = 0; i < row; i++) {
//     if (grid[i][0] === "O") makeZeros(grid, i, 0, row, col);
//   }

//   //  Traverse on Right col
//   for (let i = 0; i < row; i++) {
//     if (grid[i][col - 1] === "O") makeZeros(grid, i, col - 1, row, col);
//   }

//   // Replace -1 with 0 and zero with x
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (grid[i][j] === -1) grid[i][j] = "O";
//       else if (grid[i][j] === "O") grid[i][j] = "X";
//     }
//   }

//   return grid;
// }

// const mat = [
//   ["X", "O", "X", "X"],
//   ["X", "O", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "O", "X", "X"],
//   ["X", "X", "O", "O"],
// ];

// let modifyMat = replace(mat);

// console.log(modifyMat);

const isValid = (i, j, r, c) => {
  return i >= 0 && i < r && j >= 0 && j < c;
};

const connectedZeros = (i, j, board, n, m) => {
  board[i][j] = -1;
  const queue = [];
  queue.push([i, j]);
  let head = 0;
  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  while (head < queue.length) {
    const [r, c] = queue[head++];

    for (let k = 0; k < 4; k++) {
      const nR = r + row[k];
      const nC = c + col[k];

      if (isValid(nR, nC, n, m) && board[nR][nC] === "O") {
        board[nR][nC] = -1;
        queue.push([nR, nC]);
      }
    }
  }
};

var solve = function (board) {
  const n = board.length;
  const m = board[0].length;

  // Visit bounday of board

  //  Top
  for (let j = 0; j < m; j++) {
    if (board[0][j] === "O") {
      connectedZeros(0, j, board, n, m);
    }
  }

  // Bottom
  for (let j = 0; j < m; j++) {
    if (board[n - 1][j] === "O") {
      connectedZeros(n - 1, j, board, n, m);
    }
  }

  // Left
  for (let i = 0; i < n; i++) {
    if (board[i][0] === "O") {
      connectedZeros(i, 0, board, n, m);
    }
  }

  // Right
  for (let i = 0; i < n; i++) {
    if (board[i][m - 1] === "O") {
      connectedZeros(i, m - 1, board, n, m);
    }
  }

  console.log("Board ", board);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === -1) {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};

const mat = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];

solve(mat);
