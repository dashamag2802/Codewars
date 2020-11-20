/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
}
 */
function longest(s1, s2) {
    let resStr = '';
    let str = (s1 + s2);
    console.log(str);
    let arr = str.split('').sort();
    let res = arr.filter((el, i) => i === arr.indexOf(el));
    for (let el of res){
        resStr += el;
    }
    return resStr;
}