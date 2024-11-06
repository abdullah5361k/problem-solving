
// Selection sort -> Select the smallest element in an array and put that element in the starting index
function sortAnArray(array) {
    for(let i=0; i<array.length; i++) {
        let minValue = Math.min();
        let minIdx = i;
        for(let j=i; j<array.length; j++) {
            if(array[j] < minValue) {
                minValue = array[j];
                minIdx = j;
            }
        }
        // Swap
        array[minIdx] = array[i];
        array[i] = minValue;
    }
}


// Descending order
function sortAnArrayDesc(array) {
    for(let i=0; i<array.length; i++) {
        let minValue = Math.max();
        let minIdx = i;
        for(let j=i; j<array.length; j++) {
            if(array[j] > minValue) {
                minValue = array[j];
                minIdx = j;
            }
        }
        // Swap
        array[minIdx] = array[i];
        array[i] = minValue;
    }
}



const array = [5, 4, 1, 0,3];
sortAnArrayDesc(array);


console.log(array);