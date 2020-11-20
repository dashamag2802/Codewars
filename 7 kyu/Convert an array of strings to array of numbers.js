/*
Oh no!
Some really funny web dev gave you an array of numbers from his API response as an array of strings!

You need to cast the whole array to the correct type.

Create the function
 */
function toNumberArray(stringarray){
    return stringarray.map(el => +el);
}