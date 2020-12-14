let array: number[] = [0,1,2,3,4,5,6,8,9,10];
let missingArrays: number[] = [0,1,2,5,6,8,10];
let unorderedArray: number[] = [1,3,4,9,10,2,5]

function findMissingNumber(array: number[]){
    let i = 0;

    while(i < array.length){
        if(array[i] + 1 == array[i + 1]){
            i++;
        }
        else{
            return array[i] + 1;
        }
    }
}
let find = findMissingNumber(array);
console.log(find);

function findAllMissingNumbers(array: number[]){
    let i = 0;
    let missingNumbers: number[] = [];
    let checkLastNumber = array[0];

    while(i < array.length - 1){
        if(checkLastNumber + 1 == array[i + 1]){
            i++;
        }
        else{
            missingNumbers.push(checkLastNumber + 1);
        }
        checkLastNumber++;
    }
    return missingNumbers;
}

let findNumbers = findAllMissingNumbers(missingArrays);
console.log(findNumbers);

