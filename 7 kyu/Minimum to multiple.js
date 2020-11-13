/*
Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.
 */
function minimum(a, x) {
    let add = 0;
    let num = a % x;
    for (let i = 0; i < x; i++){
        if ((a / x) % 1 !== 0){
            a++;
            add++;
        }
    }
    return num > add ? add : num;
}