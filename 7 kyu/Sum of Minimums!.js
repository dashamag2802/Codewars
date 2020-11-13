/*
Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
 */
function sumOfMinimums(arr) {
    let sum = 0;
    let min = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j <= i; j++){
            min.push(Math.min(...arr[i]));
        }
    }
    for (let i = 0; i < min.length; i++){
        sum += min[i];
    }
    return sum;
}