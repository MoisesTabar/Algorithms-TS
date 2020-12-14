let arrayOne: number[] = [1,2,3,4,5];
let arrayTwo: number[] = [6,7,8,9,10];

function mergeArray(arrayOne: number[], arrayTwo: number[]){
    let newArray: number[] = [];

    while(arrayOne.length && arrayTwo.length){
        let element;
        if(arrayOne[0] < arrayTwo[0]){
            element = arrayOne.shift();
        }
        else{
            element = arrayTwo.shift();
        }
        newArray.push(element);
    }

    newArray = newArray.concat(arrayOne).concat(arrayTwo);
    console.log(newArray);
}

mergeArray(arrayOne, arrayTwo);


