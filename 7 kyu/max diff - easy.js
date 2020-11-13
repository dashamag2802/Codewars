/*
You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

The list(lst) contains integers, that means it may contain some negative numbers.

If the list is empty or contains a single element, return 0.

The list(lst) is not sorted.
 */
function maxDiff(list) {
    let max = Math.max(...list);
    let min = Math.min(...list);
    return list.length <= 1 ? 0 : max - min;
}