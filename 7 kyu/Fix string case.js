/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
 */
function solve(s){
    let up = 0;
    let low = 0;
    for (let i = 0; i < s.length; i++){
        if (s[i].codePointAt() >= 65 && s[i].codePointAt() <= 90){
            up++;
        } else if (s[i].codePointAt() >= 97 && s[i].codePointAt() <= 122){
            low++;
        }
    }
    return low >= up ? s.toLowerCase() : s.toUpperCase();
}