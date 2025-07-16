const isValid = (i, j, r, c) => {
  return i >= 0 && i < r && j >= 0 && j < c;
};

const connectedZeros = (i, j, board, n, m) => {
  const queue = [[i, j]];

  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];
  board[i][j] = "#";

  let idx = 0;

  while (idx < queue.length) {
    const [r, c] = queue[idx++];

    for (let k = 0; k < 4; k++) {
      const nR = r + row[k];
      const nC = c + col[k];
      if (isValid(nR, nC, n, m) && board[nR][nC] === "O") {
        board[nR][nC] = "#";
        queue.push([nR, nC]);
      }
    }
  }
};

var solve = function (board) {
  const n = board.length;
  const m = board[0].length;

  // Visit bounday of board

  // Top & Bottom
  for (let j = 0; j < m; j++) {
    if (board[0][j] === "O") connectedZeros(0, j, board, n, m);
    if (board[n - 1][j] === "O") connectedZeros(n - 1, j, board, n, m);
  }

  // Left & Right
  for (let i = 0; i < n; i++) {
    if (board[i][0] === "O") connectedZeros(i, 0, board, n, m);
    if (board[i][m - 1] === "O") connectedZeros(i, m - 1, board, n, m);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "#") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
