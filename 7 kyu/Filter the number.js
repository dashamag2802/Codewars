/*
Filter the number
Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

Task
Your task is to return a number from a string.
 */
var FilterString = function(value) {
    let str = '';
    for (i = 0; i < value.length; i++){
        if (!isNaN(value[i])){
            str += value[i];
        }
    }
    return +str;
}