/*
Alice and Bob have participated to a Rock Off with their bands. A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members' outfits.

For each one of these 3 categories they are going to be awarded one point, should they get a better judgement from the jury. No point is awarded in case of an equal vote.

You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. Your task is to find their total score by comparing them in a single line.
 */
function solve(a, b) {
    let countA = 0;
    let countB = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b [i]){
            countA++;
        } else if (a[i] < b[i]){
            countB++;
        }
    }
    return countA > countB ? `${countA}, ${countB}: Alice made "Kurt" proud!` : countA < countB ? `${countA}, ${countB}: Bob made "Jeff" proud!` : `${countA}, ${countB}: that looks like a "draw"! Rock on!`;
}