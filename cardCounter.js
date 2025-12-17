'use strict';

let count = 0;
function cardCounter(card) {
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card >= 7 && card <= 9) {
        count = count;
    } else if (
        card == 10 ||
        card == 'J' ||
        card == 'Q' ||
        card == 'K' ||
        card == 'A'
    ) {
        count--;
    } else {
        return 'Invalid card';
    }

    return count > 0 ? count + ' Bet' : count + ' Hold';
}
