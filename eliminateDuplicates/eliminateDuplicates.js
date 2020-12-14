var array = [1, 2, 3, 5, 3, 2, 3, 4, 5, 1, 1, 6, 6, 7];
//eliminate duplicates using ES6
function eliminateDuplicatesES6(array) {
    var setArray = new Set(array);
    console.log(Array.from(setArray));
}
eliminateDuplicatesES6(array);
//eliminate duplicates without using ES6
function eliminateDuplicates(array) {
    var element = [];
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (!(array[i] in element)) {
            newArray.push(array[i]);
            element[array[i]] = true;
        }
    }
    console.log(newArray);
}
eliminateDuplicates(array);
