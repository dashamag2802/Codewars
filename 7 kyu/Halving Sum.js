/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.
 */
function halvingSum(n) {
    let sum = n;
    let i = 2;
    do{
        sum = sum + Math.floor(n/i);
        i*=2;
    } while (i < n);
    return sum;
}