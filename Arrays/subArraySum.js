function maxSubArraySubInAnArray(array) {  // Brute force approach -> O(n^3)

    // Take carse of max sum
    let maxSum = 0;

    // Step 1
    for(let i=0; i<array.length; i++) {
        // Step 2 -> For finding the ending point
        for(let j=i; j<array.length; j++) {

            let subArraySum = 0;

            // Step 3 -> Loop through start to end to find the max sum
            for(let k=i; k<=j; k++) {
                subArraySum += array[k];
            }

            // When one subarray sum is calculate lets find if it is  max than its preivious
            maxSum = Math.max(maxSum, subArraySum);
        }
    }


    return maxSum;
}


// Max sub array sum with prefix array
function maxSubArraySumPrefix(array) { // O(n^2)
    // Let create an prefix array
    let prefixArr = [];
    let maxSum = 0;
    
    prefixArr[0] = array[0];
    // Loop through the array to find the prefex sum (prefix mean from root to the current point)
    for(let i=1; i<array.length; i++) {
        prefixArr[i] = prefixArr[i-1] + array[i];
    }



    for(let i=0; i<array.length; i++) {
        for(let j=i; j<array.length; j++) {
            let subArraySum = i === 0 ?  prefixArr[j] : prefixArr[j] - prefixArr[i-1];
            maxSum = Math.max(maxSum, subArraySum);
        }
    }

    return maxSum;

}


// Kadane's 
function maxSubArraySumKadane(array) { // Most optimized O(n)
    let cs = 0;
    let maxSum = 0;

    // Loop
    for(let i=0; i<array.length; i++) {
        cs += array[i];
        if(cs < 0) {
            cs = 0;
        }
        maxSum = Math.max(maxSum, cs);
    }

    // Return max
    return maxSum;
}

const array = [-2, -3, 4, -1, -2, 1, 5, -3];
const array2 = [1, -2, 6, -1, 3];
console.log(maxSubArraySubInAnArray(array));
console.log(maxSubArraySubInAnArray(array));
console.log(maxSubArraySumKadane(array));