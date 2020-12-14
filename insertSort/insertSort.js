var array = [12, 1, 4, 7, 3];
var sortArray = [];
function insertSort(array) {
    for (var i = 0; i < array.length; i++) {
        sortArray.push(array[i]);
        var j = 0;
        while (array[i] > sortArray[j] && j < array.length) {
            j++;
        }
        sortArray.splice(j, 0, array[i]);
    }
    return sortArray;
}
var insert = insertSort(array);
console.log(insert);
