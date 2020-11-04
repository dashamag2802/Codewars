/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
 */
function abbrevName(name){
    let i;
    let n = '';
    for (i = 0; i < name.length; i++){
        if (name[i] === ' '){
            n = name[i+1];
        }
    }
    let nameNew = (name[0] + '.' + n);
    return nameNew.toUpperCase();
}