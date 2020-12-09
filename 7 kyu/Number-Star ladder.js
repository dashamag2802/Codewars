/*
Task
Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)
 */
function pattern(m){
    let output = '1' + '\n';
    for (let i = 1; i < m; i++){
        output += '1';
        for (let j = 1; j <= i; j++){
            output += '*';
        }
        output += i + 1 +'';
        output += '\n';
    }
    return output.substring(0, output.length - 1);
}