const isSafe = (r, c, num, board, n) => {
  // Row
  for (let j = 0; j < n; j++) {
    if (board[r][j] === num) return false;
  }

  // Col
  for (let i = 0; i < n; i++) {
    if (board[i][c] === num) return false;
  }

  // Grid
  let sr = Math.floor(r / 3) * 3;
  let sc = Math.floor(c / 3) * 3;
  for (let i = sr; i < sr + 3; i++) {
    for (let j = sc; j < sc + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }

  return true;
};

const sudoku = (i, j, board, n) => {
  if (i === n) return true;

  if (j === n) {
    return sudoku(i + 1, 0, board, n);
  }

  if (board[i][j] != ".") {
    return sudoku(i, j + 1, board, n);
  }

  for (let digit = 1; digit <= 9; digit++) {
    if (isSafe(i, j, String(digit), board, n)) {
      board[i][j] = String(digit);
      if (sudoku(i, j + 1, board, n)) {
        return true;
      }
      board[i][j] = ".";
    }
  }

  return false;
};

const solveSudoku = (board) => {
  sudoku(0, 0, board, board.length);
};
