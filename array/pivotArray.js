function findElementInAnArray(array, target) {
    let start = 0;
    let end = array.length-1;

    while(start <= end) {
        // Find mid
        let mid = Math.floor(start + (end - start) / 2);
        if(array[mid] === target ) return mid;

        // Lets find we are on left side of an array or right side
        if(array[start] < array[mid]) {
            if(target >= array[start] && target< array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(target > array[mid] && target <= array[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

    }

    return -1;

}


const array = [4,  5, 6, 7, 0, 1, 2];

console.log(findElementInAnArray(array, 1));