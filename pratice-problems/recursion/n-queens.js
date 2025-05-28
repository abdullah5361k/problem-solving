const isSafe = (r, c, n, grid) => {
  // col
  for (let i = 0; i <= r; i++) {
    if (grid[i][c] === "Q") return false;
  }

  // right UP grid
  for (let i = r, j = c; i >= 0 && j < n; i--, j++) {
    if (grid[i][j] === "Q") return false;
  }

  // Right DOWN grid
  for (let i = r, j = c; i < n && j < n; i++, j++) {
    if (grid[i][j] === "Q") return false;
  }

  // Left UP grid
  for (let i = r, j = c; i >= 0 && j >= 0; i--, j--) {
    if (grid[i][j] === "Q") return false;
  }

  // Left DOWN grid
  for (let i = r, j = c; i < n && j >= 0; i++, j--) {
    if (grid[i][j] === "Q") return false;
  }

  return true;
};

const getAllSolutionOfNQueens = (i, j, n, grid, possibleSolutions) => {
  if (i === n) {
    possibleSolutions.push(structuredClone(grid));
    return;
  }

  for (let j = 0; j < n; j++) {
    if (isSafe(i, j, n, grid)) {
      grid[i][j] = "Q";
      getAllSolutionOfNQueens(i + 1, j, n, grid, possibleSolutions);
      grid[i][j] = ".";
    }
  }
};

var solveNQueens = function (n) {
  const grid = new Array(n);
  for (let i = 0; i < n; i++) {
    grid[i] = new Array(n).fill(".");
  }
  const possibleSolutions = [];
  getAllSolutionOfNQueens(0, 0, n, grid, possibleSolutions);
  console.log(possibleSolutions);
};

solveNQueens(4);
