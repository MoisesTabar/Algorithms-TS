var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = [6, 7, 8, 9, 10];
function mergeArray(arrayOne, arrayTwo) {
    var newArray = [];
    while (arrayOne.length && arrayTwo.length) {
        var element = void 0;
        if (arrayOne[0] < arrayTwo[0]) {
            element = arrayOne.shift();
        }
        else {
            element = arrayTwo.shift();
        }
        newArray.push(element);
    }
    newArray = newArray.concat(arrayOne).concat(arrayTwo);
    console.log(newArray);
}
mergeArray(arrayOne, arrayTwo);
