function calculateWaterTrap(array) {
    // First step -> Find left max of each elements
    const leftMax = [];
    leftMax[0] =  array[0];
    for(let i=1; i<array.length; i++) {
        if(array[i] > leftMax[i-1]) {
            leftMax[i] = array[i];
        } else {
            leftMax[i] = leftMax[i-1];
        }
    }


    // Second step -> Find right max of each elements
    const rightMax = [];
    rightMax[array.length-1] = array[array.length-1];
    for(let i=array.length-2; i>=0; i--) {
        if(array[i] > rightMax[i+1]) {
            rightMax[i] = array[i];
        } else {
            rightMax[i] = rightMax[i+1];
        }
    }

    let water = 0;

    // Lets calculate water in each trap
    for(let i=0; i<array.length; i++) {
        let min = Math.min(leftMax[i], rightMax[i]);
        water += min - array[i];
    }

    return water;
}


const array = [4,2, 0, 6, 3, 2,5];
console.log(calculateWaterTrap(array));