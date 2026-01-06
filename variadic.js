'use strict';

/* // function definition
function getSum(num1, num2) {
    return num1 + num2;
}

// function call with extra argument
console.log(getSum(9, 4, 5, 7)); // 7 */

/* function logArgs() {
    console.log(arguments[0]);
    for (const arg of arguments) {
        console.log(arg);
    }
}

logArgs(1, 2, 3); */

function logArgs() {
    console.log(typeof arguments);
    /* for (const arg of args) {
        console.log(arg);
    } */
}

logArgs('1', 'Good', 'Great');
