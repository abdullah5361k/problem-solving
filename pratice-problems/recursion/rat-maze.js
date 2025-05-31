const findPath = (i, j, maze, n, vis, currPath, ans) => {
  if (i === n - 1 && j === n - 1) {
    ans.push(currPath);
    return;
  }

  if (i < 0 || i >= n || j < 0 || j >= n || maze[i][j] == 0 || vis[i][j])
    return;

  vis[i][j] = true;

  this.findPath(i + 1, j, maze, n, vis, currPath + "D", ans); // Down
  this.findPath(i - 1, j, maze, n, vis, currPath + "U", ans); // UP
  this.findPath(i, j - 1, maze, n, vis, currPath + "L", ans); // Left
  this.findPath(i, j + 1, maze, n, vis, currPath + "R", ans); // Right

  vis[i][j] = false;
};

const ratInMaze = (maze) => {
  let n = maze.length;
  const ans = [];
  const vis = new Array(n);
  for (let i = 0; i < n; i++) {
    vis[i] = new Array(n).fill(false);
  }
  this.findPath(0, 0, maze, n, vis, "", ans);
  return ans.sort();
};
