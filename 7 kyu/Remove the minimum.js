/*
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
 */
function removeSmallest(numbers) {
    let index;
    let arr = [];
    let min = Math.min(...numbers);
    if (numbers.length === 0){
        return [];
    } else {
        for (let i = 0; i < numbers.length; i++){
            if (min === numbers[i]){
                index = i;
                break;
            }
        }
    }
    for (let i = 0; i < numbers.length; i++){
        if (i !== index){
            arr.push(numbers[i]);
        }
    }
    return arr;
}