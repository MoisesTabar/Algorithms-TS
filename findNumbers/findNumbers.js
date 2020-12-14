var array = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
var missingArrays = [0, 1, 2, 5, 6, 8, 10];
function findMissingNumber(array) {
    var i = 0;
    while (i < array.length) {
        if (array[i] + 1 == array[i + 1]) {
            i++;
        }
        else {
            return array[i] + 1;
        }
    }
}
var find = findMissingNumber(array);
console.log(find);
function findAllMissingNumbers(array) {
    var i = 0;
    var missingNumbers = [];
    var checkLastNumber = array[0];
    while (i < array.length - 1) {
        if (checkLastNumber + 1 == array[i + 1]) {
            i++;
        }
        else {
            missingNumbers.push(checkLastNumber + 1);
        }
        checkLastNumber++;
    }
    return missingNumbers;
}
var findNumbers = findAllMissingNumbers(missingArrays);
console.log(findNumbers);
