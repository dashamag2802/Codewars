/*
Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.
 */
function skiponacci(n) {
    if (n === 1) return '1';
    let fib =[1, 1];
    for(let i = 2; i < n; i++){
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.map((el, i) => i % 2 ? 'skip' : el).join(' ');
}



function skiponacci(n) {
    if (n === 1) return '1';
    let fib = [1, 1];
    for (let i = 2; i < n; i++){
        fib.push(fib[i-2] + fib[i-1]);
    }
    let skip = fib.map((el, i) => i % 2 ? 'skip' : el);
    return skip.join(' ');
}