'use strict';

function confirmEnding(word1, word2) {
    if (word1.length < word2.length) {
        return false;
    } else {
        let word1End = word1.substring(word1.length - word2.length);
        return word1End === word2;
    }
    return false;
}

console.log(confirmEnding('dddddnr', 'n'));
