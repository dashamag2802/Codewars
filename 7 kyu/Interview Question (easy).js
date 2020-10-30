/*
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearence in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;)
 */

function getStrings(city){
    let obj = {};
    city = city.toLowerCase().replace(/[' ']/g, '');
    for(let i = 0; i < city.length; i++){
        if (obj[city[i]]){
            obj[city[i]] += '*';
        } else {
            obj[city[i]] = '*';
        }
    }
    let arr = Object.entries(obj).join(';').replace(/[',']/g, ':').replace(/[';']/g, ',');
    console.log(arr);
    return arr;
}