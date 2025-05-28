const maxMeetings = (start, end) => {
  const mergeTiming = [];
  for (let i = 0; i < start.length; i++) {
    mergeTiming.push([start[i], end[i]]);
  }

  mergeTiming.sort((a, b) => a[1] - b[1]);
  let totalHeldMeetings = 1;

  let lastHeldMeeting = 0;

  for (let i = 1; i < mergeTiming.length; i++) {
    if (mergeTiming[i][0] > mergeTiming[lastHeldMeeting][1]) {
      lastHeldMeeting = i;
      totalHeldMeetings += 1;
    }
  }

  return totalHeldMeetings;
};
