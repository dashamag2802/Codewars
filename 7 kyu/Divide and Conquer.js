/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from
the total of the non-string integers.
 */
function divCon(x){
    let sumNum = 0;
    let sumStr = 0;
    for (let i = 0; i < x.length; i++){
        if (typeof x[i] === 'number'){
            sumNum += x[i];
        } else {
            sumStr += +x[i];
        }
    }
    return sumNum - sumStr;
}