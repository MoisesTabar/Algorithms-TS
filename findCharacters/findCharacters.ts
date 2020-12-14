let text = "Hello World";
let chars = {};

//count characters in a text without ES6
function countChars(text: string){
    for(let i = 0; i < text.length; i++){
        let char = text[i];
        if(chars[char] == undefined){
            chars[char] = 1;
        }
        else{
            chars[char]++;
        }
    }
    console.log(chars);
}
countChars(text);

//count characters in a text with ES6
function countCharsES6(text, chars: object){
    let char = [...text];
    //we could use forEach too if we do not want to create an array
    char.map(() => {
        if(chars[text] == undefined){
            chars[text] = 1;
        }
        else{
            chars[text]++;
        }
    });
    console.log(chars);
}
countCharsES6(text, chars);