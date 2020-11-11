/*
Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

Quadratic equation -
 */
function roots(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
    let sum;
    let sum2;
    if (d < 0){
        return null;
    } else if (d === 0){
        x1 = -b / (2 * a);
        return Math.round(x1 * 2 * 100) / 100;
    } else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        sum = x1 + x2;
        return  +(sum.toFixed(2));
    }
}