'use strict';

function getSum(a, b) {
    let diff = b - a;
    if (a == b) {
        return a;
    } else if (diff > 0) {
        return a + getSum(a + 1, b);
    } else {
        return a + getSum(a - 1, b);
    }
}

console.log(getSum(1, -2));

//409,266
