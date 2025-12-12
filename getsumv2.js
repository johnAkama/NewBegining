'use strict';

function getSum(a, b) {
    /*  let min = Math.min(a, b);
    let max = Math.max(a, b); */
    const length = b - a;

    let sum = 0;
    for (let i = 1; i < Math.abs(length); i++) {
        sum = sum - i;
    }
    return length > 0 ? sum - 1 : sum + 1; //length;
}

console.log(getSum(1, -2000));
