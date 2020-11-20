/*
Given an array/list [] of integers , Find all the LEADERS in the array.
 */
function sum(arr){
    return arr.reduce((s, el) => s + el, 0)
}
var arrayLeaders = numbers => {
    return numbers.filter((el, i) => el > sum(numbers.slice(i+1)));
}