/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
 */
let filterLucky=x=>{
    let arr = [];
    for (let el of x){
        arr.push(el + '');
    }
    let res = arr.filter(el => el.includes(7));
    let res7 = [];
    for (let el of res){
        res7.push(+el);
    }
    return res7;
}