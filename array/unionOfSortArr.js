function findUnion(arr1, arr2) {


    // First step to find the common element in both sorted way

    const union = [];

    let leftPnt = 0;
    let rightPnt = 0;


    while(leftPnt < arr1.length && rightPnt < arr2.length) {
        // Shoule both elements are same
        let temp1 = arr1[leftPnt];
        let temp2 = arr2[rightPnt];
        if(arr1[leftPnt] === arr2[rightPnt]) {
            union.push(arr1[leftPnt]);
            leftPnt++;
            rightPnt++;

        while(temp1 == arr1[leftPnt] && leftPnt < arr1.length) {
            leftPnt++;
        }


        while(temp2 == arr2[rightPnt] && rightPnt < arr2.length) {
            rightPnt++;
        }
        } else if(arr1[leftPnt] < arr2[rightPnt]) {
            union.push(arr1[leftPnt]);
            leftPnt++;
            while(temp1 == arr1[leftPnt] && leftPnt < arr1.length) {
                leftPnt++;
            }
        } else {
            union.push(arr2[rightPnt]);
            rightPnt++;
            while(temp2 == arr2[rightPnt] && rightPnt < arr2.length) {
                rightPnt++;
            }
        }


    }


    // If there are some remaining elements
    while(leftPnt < arr1.length) {
        union.push(arr1[leftPnt]);
        leftPnt++;
    }


    while(rightPnt < arr2.length) {
        union.push(arr2[rightPnt]);
        rightPnt++;
    }

    console.log(union);
}


const arr1 = [2,2,2,2,2,2,4];
const arr2 = [4,4,5];


findUnion(arr1 , arr2);