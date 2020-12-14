var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//count characters in a text without ES6
var text = "Hello World";
var chars = {};
function countChars(text) {
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (chars[char] == undefined) {
            chars[char] = 1;
        }
        else {
            chars[char]++;
        }
    }
    console.log(chars);
}

countChars(text);
//count characters in a text with ES6
function countCharsES6(text, chars) {
    var char = __spreadArrays(text);
    char.map(function () {
        if (chars[text] == undefined) {
            chars[text] = 1;
        }
        else {
            chars[text]++;
        }
    });
    console.log(chars);
}
countCharsES6(text, chars);
