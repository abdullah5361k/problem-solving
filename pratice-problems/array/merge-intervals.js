const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  mergedIntervals.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= mergedIntervals[mergedIntervals.length - 1][1]) {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        mergedIntervals[mergedIntervals.length - 1][1],
        intervals[i][1]
      );
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }

  return mergedIntervals;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));

// Output: [[1,6],[8,10],[15,18]]
