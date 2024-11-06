
// Bubble array ->>> by adjacent swaping we sort the array (Sort in assending order)
function sortAnArray(array) {
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length-i; j++) {
            // Swap
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}


// Desending order
function sortAnArrayDesc(array) {
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length-i; j++) {
            // Swap
            if(array[j] < array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

const array = [-1, -3, 4, 5, 1, 0];

sortAnArrayDesc(array);

console.log(array);