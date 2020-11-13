/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
 */
function arrCheck (value) {
    for (let el of value){
        if (!Array.isArray(el)){
            return false;
        }
    }
    return true;
}