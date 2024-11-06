function isPossible(positions, k, dist) {
    let lastC = 0;
    let placedCows = 1;

    for(let i=1; i<positions.length; i++) {
        if((positions[i] - positions[lastC]) >= dist) {
            lastC = i;
            placedCows++;
        }
    }

    console.log({placedCows});

    return placedCows >= k;
}



function cows(positions, k) {


    let si = 1;
    let ei = Math.max(...positions);


    while(si <= ei) {
        let mid = Math.floor((si+ei)/2);
        console.log(isPossible(positions, k, mid));
        if(isPossible(positions, k, mid)) {
            si = mid + 1;
        } else {
            ei = mid - 1;
        }
    }

console.log(ei);    

}


cows([0,3,4,7,9,10], 4);