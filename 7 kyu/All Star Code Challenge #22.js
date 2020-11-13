/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #22

Create a function called toTime() that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"
 */
function toTime(seconds) {
    let h = 0;
    let m = 0;
    while ((seconds / 3600) >=1){
        h++;
        seconds -= 3600;
    }
    while ((seconds / 60) >= 1){
        m++;
        seconds -= 60;
    }
    return `${h} hour(s) and ${m} minute(s)`
}