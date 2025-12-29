'use strict';

function mutatuion(args) {
    let state = true;
    let first = args[0].toLowerCase();
    let second = args[1].toLowerCase();

    for (let i = 0; i < second.length; i++) {
        if (first.indexOf(second[i]) < 0) {
            state = false;
        }
    }
    return state;
}

console.log(mutatuion(['hello', 'ell']));
