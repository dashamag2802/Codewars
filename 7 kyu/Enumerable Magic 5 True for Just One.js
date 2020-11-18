/*
Task
Create a function called one that accepts two params:

a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
 */
function one(arr, fun){
    let arrN = arr.filter(fun);
    return arrN.length === 1 ? true : false;
}