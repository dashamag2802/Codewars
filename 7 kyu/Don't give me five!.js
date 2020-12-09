/*
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers
with a 5 in it. The start and the end number are both inclusive!
 */
function dontGiveMeFive(start, end)
{
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i + '');
    }
    let arr5 = arr.filter(el => el.includes('5'));
    return arr.length - arr5.length;
}