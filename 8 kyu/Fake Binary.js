/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 */
function fakeBin(x){
    let string = '';
    for (i = 0; i < x.length; i++){
        if (x[i] >= 5){
            string = string + 1;
        } else{
            string = string + 0;
        }
    }
    return string;
}