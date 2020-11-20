/*
You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return
a sequence with only one item, and the value of that item must be 0. like this:
 */
function completeSeries(arr) {
    let arrN = [];
    let max = Math.max(...arr);
    let res = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
    for (let i = 0; i <= max; i++){
        arrN.push(i);
    }
    return res.length === 0 ? res = arrN : [0];
}