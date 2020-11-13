/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
 */
function adjacentElementsProduct(array) {
    let max = array[0] * array[1];
    for (let i = 1; i < array.length - 1; i++){
        if ((array[i] * array[i+1]) > max){
            max = (array[i] * array[i+1]);
        }
    }
    return max;
}