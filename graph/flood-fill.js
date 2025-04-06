/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const isValid = (i, j, n, m) => {
  return i >= 0 && i < n && j > 0 && j < m;
};

const BFS = (image, sr, sc, color) => {
  const queue = [];
  queue.push([sr, sc]);
  image[sr][sc] = color;

  const row = [-1, 1, 0, 0];
  const col = [0, 0, -1, 1];

  let head = 0;

  while (head < queue.length) {
    const [r, c] = queue[head++];

    for (let k = 0; k < 4; k++) {
      const nR = r + row[k];
      const nC = c + col[k];
      if (
        isValid([nR], [nC], image.length, image[0].length) &&
        image[nR][nC] == 1
      ) {
        image[nR][nC] = color;
        queue.push([nR, nC]);
      }
    }
  }
};

const floodFill = (image, sr, sc, color) => {
  BFS(image, sr, sc, color);
  return image;
};
