/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
 */

function testit(s){
    if (s.length === 0) return '';
    let str = '';
    let a = s.split(' ');
    console.log(a);
    for (let i = 0; i < a.length; i++){
        if (a[i].length === 1){
            str += a[i].toUpperCase() + ' ';
        } else{
            str += a[i].slice(0, a[i].length - 1) +  (a[i][a[i].length - 1]).toUpperCase() + ' ';
        }
    }
    return str.substring(0, str.length - 1);
}