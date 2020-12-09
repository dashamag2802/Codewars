/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
The string can contain any char.
 */
function XO(str) {
    let a = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] === 'x'){
            countX++;
        } else if (a[i] === 'o'){
            countO++;
        }
    }
    return countX === countO;
}