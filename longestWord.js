'use strict';

function findLongestWordLength(sentence) {
    sentence = sentence.trim().replace(/\s+/g, ' ');
    if (!sentence === true) return 0;
    let sentenceObjec = sentence.split(' ');
    let highest = [];
    sentenceObjec.forEach((word) => {
        highest.push(word.length);
    });

    return sentenceObjec[highest.indexOf(Math.max(...highest))];
}

console.log(
    findLongestWordLength(
        'Test the best superman test ever jumped here in junesburgs'
    )
);
