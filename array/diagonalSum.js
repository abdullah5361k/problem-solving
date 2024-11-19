function calculateDiagonalSum(array) {

    let diagonalSum = 0;


    for(let i=0; i<array.length; i++) {
        diagonalSum += array[i][i];

        diagonalSum += array[i][array.length-1-i];
    }


    return diagonalSum;

}



const array = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

const nArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(calculateDiagonalSum(nArray));