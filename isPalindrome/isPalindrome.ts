function reversal(str: string){
    return str.split('').reverse().join('');
}

function isPalindrome(arr: Array<string>){
    arr.forEach(i => {
        let reversedArray = reversal(i)
        
        if(reversedArray == i){
            console.log(i + ' is Palindrome');       
        }
        else{
            console.log(i + ' is not Palindrome');
        }
    });
}

isPalindrome(['ana', 'antonio', '77', 'oso']);