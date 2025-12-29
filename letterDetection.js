'use strict';

function fearNotLetter(strg) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newAlphabet = alphabet.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if (
            strg.indexOf(newAlphabet[i]) === -1 &&
            strg.indexOf(newAlphabet[i - 1]) !== -1 &&
            strg.indexOf(newAlphabet[i + 1]) !== -1
        ) {
            return newAlphabet[i];
        }
    }
    return undefined;
}

console.log(fearNotLetter('abcde'));
