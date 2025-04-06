/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j >= 0 && j < m;
};

const BFS = (i, j, board) => {
  const queue = [];
  queue.push([i, j]);
  board[i][j] = "T";
  let head = 0;

  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  while (head < queue.length) {
    const [i, j] = queue[head++];

    for (let k = 0; k < 4; k++) {
      const nR = i + row[k];
      const nC = j + col[k];
      if (
        isValid(nR, nC, board.length, board[0].length) &&
        board[nR][nC] === "O"
      ) {
        board[nR][nC] = "T";
        queue.push([nR, nC]);
      }
    }
  }
};

const surroundedRegion = (board) => {
  // Visit bounday of board to find 0
  // Top
  for (let j = 0; j < board[0].length; j++) {
    if (board[0][j] === "O") {
      BFS(0, j, board);
    }
  }

  // Bottom
  for (let j = 0; j < board[0].length; j++) {
    if (board[board.length - 1][j] === "O") {
      BFS(board.length - 1, j, board);
    }
  }

  // Left
  for (let i = 0; i < board.length; j++) {
    if (board[i][0] === "O") {
      BFS(i, 0, board);
    }
  }

  // Right
  for (let i = 0; j < board.length; j++) {
    if (board[i][board[0].length - 1] === "O") {
      BFS(i, board[0].length - 1, board);
    }
  }

  // Replace 'O' with 'X' and 'T' with 'O'

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (board[i][j] === "T") board[i][j] = "O";
    }
  }
};
