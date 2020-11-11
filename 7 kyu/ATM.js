/*
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
 */
function solve(n) {
    let count = 0;
    if (n % 10 !== 0){
        return -1;
    } else {
        do {
            if (n >= 500){
                n = n - 500;
                count++;
            } else if (n >= 200){
                n = n - 200;
                count++;
            } else if (n >= 100){
                n = n - 100;
                count++;
            } else if (n >= 50){
                n = n - 50;
                count++;
            } else if (n >= 20){
                n = n - 20;
                count++;
            } else {
                n = n - 20;
                count++;
            }
        } while (n > 0);
    }
    return count;
}