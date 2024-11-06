function findDuplicatedInAnArray(array) {
    const obj = {};


    for(let i=0;i<array.length; i++) {
        if(obj[array[i]]) {
            return true;
        } else {
            obj[array[i]] = true;
        }
    }


    return false;

}


const array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(findDuplicatedInAnArray(array));
