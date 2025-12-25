'use strict';

function findLongestWordLength(sentence) {
    sentence = sentence.trim().replace(/\s+/g, ' ');
    if (!sentence === true) return 0;
    let sentenceObjec = sentence.split(' ');
    let highest = [];
    sentenceObjec.forEach((word) => {
        highest.push(word.length);
    });

    //return sentenceObjec[highest.indexOf(Math.max(...highest))]; //return longest string
    return Math.max(...highest); //return  longest string size
}

console.log(
    findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
