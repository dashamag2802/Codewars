/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
 */
function maxTriSum(numbers){
    let numbers1 = [];
    let numbers2 = [];
    let sum = 0;
    let max1 = Math.max(...numbers);
    let max2;
    let max3;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] !== max1){
            numbers1.push(numbers[i]);
        }
    }
    max2 = Math.max(...numbers1);
    for (let i = 0; i < numbers1.length; i++){
        if(numbers1[i] !== max2){
            numbers2.push(numbers1[i]);
        }
    }
    max3 = Math.max(...numbers2);
    return max1 + max2 + max3;
}