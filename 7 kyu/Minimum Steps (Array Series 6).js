/*
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until
their Sum becomes greater or equal to K.
 */
function minimumSteps(numbers, value){
    let count = 0;
    let i = 0;
    let sum = 0;
    numbers.sort((a, b) => a - b);
    while (sum < value){
        sum += numbers[i];
        i++;
        count++;
    }
    return count - 1;
}