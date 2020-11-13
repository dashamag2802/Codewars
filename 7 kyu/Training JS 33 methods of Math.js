/*
In this lesson we learn three methods of Math: max(), min() and abs().

Their definitions and detailed information:

Math.max()
Math.min()
Math.abs()
Their usage is very simple: for the given parameters, return the maximum value, minimum value and absolute value.
Here we use some examples to understand their usage:
 */
function maxMin(arr1,arr2){
    let arr = [];
    for (let i = 0; i < arr1.length; i++){
        arr.push(Math.abs(arr1[i] - arr2[i]));
    }
    return [Math.max(...arr), Math.min(...arr)];
}