function printMatrixArray(array) {

    let sr = 0;
    let er = array[0].length-1;
    let sc = 0;
    let ec = array[0].length-1;

    console.log(er);

    // for(let i=sr+1; i<=er; i++) {
    //     console.log(i);
    //     process.stdout.write(`${array[i][ec]} `);
    // }

    return;


    while(sr < er && sc < ec ) {


        // Print top
        for(let j=sc; j<=ec; j++) {
            process.stdout.write(`${array[sr][j]} `);
        }

        // Print right
        for(let i=sr+1; i<=er; i++) {
            process.stdout.write(`${array[i][ec]} `);
        }

        // Print bottom
        for(let j=ec-1; j>=sc; j--) {
            process.stdout.write(`${array[er][j]} `)
        }

        // Print left
        for(let i=er-1; i>=sr+1; i--) {
            process.stdout.write(`${array[i][sc]} `);
        }


        // We print the outer side of an array
        // Reduce the row and column to print the inner side
        sr++;
        er--;
        sc++;
        ec--;

    }

}



const array = [[1,2,3,4,], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
const newArray = [[1,2,3,4,5], [6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
printMatrixArray(newArray);
console.log();