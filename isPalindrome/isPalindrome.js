function reversal(str) {
    return str.split('').reverse().join('');
}
function isPalindrome(arr) {
    arr.forEach(function (i) {
        var reversedArray = reversal(i);
        if (reversedArray == i) {
            console.log(i + ' is Palindrome');
        }
        else {
            console.log(i + ' is not Palindrome');
        }
    });
}
isPalindrome(['ana', 'antonio', '77', 'oso']);
