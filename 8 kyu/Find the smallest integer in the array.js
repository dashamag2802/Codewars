/*
Given an array of integers your solution should find the smallest integer.
 */
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestInt = args[0];
        for (let i = 0; i < args.length; i++){
            if (smallestInt > args[i]){
                smallestInt =  args[i];
            }
        }
        return smallestInt;
    }
}