'use strict';

/* Calculator Design using */
function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    for (let char of s) {
        if (vowels.includes(char)) {
            console.log(char);
        }
    }

    for (let char of s) {
        if (!vowels.includes(char)) {
            console.log(char);
        }
    }
}

vowelsAndConsonants('javascriptloops');
