/*
Simple, remove the spaces from the string, then return the resultant string.
 */
function noSpace(x){
    let str = '';
    for (let i = 0; i < x.length; i++){
        if (x[i] !== ' ') {
            str = str + x[i];
        } else {
            i;
        }
    }
    return str;
}