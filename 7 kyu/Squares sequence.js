/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number.
If n is negative or zero, return an empty array/list.
 */
function squares(x, n) {
    let arr = [];
    if (n <= 0){
        arr = [];
    } else {
        arr.push(Math.pow(x, 1));
        for (i = 1; i < n; i++){
            arr.push(Math.pow(x, 2));
            x = Math.pow(x, 2);
        }
    }
    return arr;
}