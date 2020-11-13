/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
 */
function cleanString(s) {
    let arr = [];
    for (let el of s){
        if (el !== '#'){
            arr.push(el);
        } else {
            arr.pop(el);
        }
    }
    return arr.join('');
}