'use strict';

function pangram(stringValue) {
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let result = abc
        .split('')
        .map((value) => {
            if (stringValue.toLowerCase().indexOf(value) < 0) {
                return false;
            } else {
                return true;
            }
        })
        .every((value) => {
            return value === true;
        });
    return result;
}

console.log(pangram('The quick brown fox jumps over the lazy dog'));
