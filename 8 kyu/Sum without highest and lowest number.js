/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
 */
function sumArray(array) {
    if(!array || array.length <= 1){
        return 0;
    } else {
        let sum = 0;
        let max = array[0];
        let min = array[0];
        for (let i = 0; i < array.length; i++){
            sum = sum + array[i];
            if (max < array[i]){
                max = array[i];
            }
            if (min > array[i]){
                min = array[i];
            }
        }
        return sum - max - min;
    }
}