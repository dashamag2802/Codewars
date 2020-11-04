/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 */
function invert(array) {
    let opposit = [];
    for (let i = 0; i < array.length; i++){
        opposit.push(-array[i]);
    }
    return opposit;
}