/*
Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".
 */
function isVeryEvenNumber(n) {
    let last;
    let sum;
    while (n >= 10){
        sum = 0;
        while (n > 0){
            last = n % 10;
            n = (n - last)/10;
            sum = sum + last;
        }
        n = sum;
    }
    return (n % 2 === 0) ? true : false;
}