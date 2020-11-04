/*
###Lucky number

Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.
 */
function isLucky(n) {
    let str = String(n);
    let number = 0;
    for (i = 0; i < str.length; i++){
        number = number + (+str[i]);
    }
    if (number === 0 || number % 9 === 0){
        return true;
    }
    return false;
}