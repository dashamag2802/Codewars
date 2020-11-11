/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
 */
function drawStairs(n) {
    let iStairs = '';
    let place = '';
    for (let i = 1; i < n; i++){
        place = place + ' ';
        iStairs = iStairs + 'I\n' + place;
    }

    return iStairs + 'I';
}