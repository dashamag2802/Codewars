/*
Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.
 */
function sum(num){
    return num.reduce((s, el) => s + el, 0)
}
function peak(arr){
    let left;
    let right;
    for (let i = 1; i < arr.length - 1; i++){
        left = sum(arr.slice(0, i));
        right = sum(arr.slice(i+1));
        if (left === right){ return i;}
    }
    return -1;
}