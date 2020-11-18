/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:
 */
function getEvenNumbers(numbersArray){
    let arr = numbersArray.filter(el => el % 2 === 0);
    return arr;
}