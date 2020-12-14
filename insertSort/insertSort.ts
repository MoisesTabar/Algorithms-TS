let array: number[] = [12, 1, 4, 7, 3];
let sortArray: number[] = [];

function insertSort(array:number[]){
    for(let i = 0; i < array.length; i++){
        sortArray.push(array[i]);
        let j = 0; 
        while(array[i] > sortArray[j] && j < array.length){
            j++;
        }
        sortArray.splice(j, 0, array[i]);
    }
    return sortArray;
}

let insert = insertSort(array);
console.log(insert);