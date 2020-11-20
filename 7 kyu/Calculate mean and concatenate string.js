/*
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.
 */
function mean(lst){
    let num = lst.filter(el => el = parseInt(el, 10) || el === "0");
    let str = lst.filter(el => !num.includes(el));
    return [num.reduce((s, el) => s + +el, 0)/num.length, str.reduce((s, el) => s + el)];
}