/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
 */
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0){
        return -1;
    }
    let result;
    let xMax = a1[0];
    let xMin = a1[0];
    let yMax = a2[0];
    let yMin = a2[0];
    for (let i = 1; i < a1.length; i++){
        if (a1[i].length > xMax.length){
            xMax = a1[i];
        }
        if (a1[i].length < xMin.length){
            xMin = a1[i];
        }
    }
    for (let i = 1; i < a2.length; i++){
        if (a2[i].length > yMax.length){
            yMax = a2[i];
        }
        if (a2[i].length < yMin.length){
            yMin = a2[i];
        }
    }
    if ((xMax.length - yMin.length) > (yMax.length - xMin.length)){
        result = Math.abs(xMax.length - yMin.length);
    } else {
        result = Math.abs(yMax.length - xMin.length);
    }
    return result;
}
