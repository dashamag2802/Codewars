/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
 */
function switcher(x){
    let arr = x.map(el => +el);
    let str = '';
    let a = 71;
    let b = 26;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= 26){
            str += String.fromCodePoint(a + (b - arr[i]) * 2 + arr[i]);
        } else if (arr[i] === 27){
            str += String.fromCodePoint(arr[i] + 6);
        } else if (arr[i] === 28){
            str += String.fromCodePoint(arr[i] + 35);
        } else if (arr[i] === 29){
            str += String.fromCodePoint(arr[i] + 3);
        }
    }
    return str;
}