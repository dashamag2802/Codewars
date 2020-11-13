/*
What is type of variable?
 */
function type(value) {
    return ({}).toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}