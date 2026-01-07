function pairElement(word) {
    let twoDA = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'A') {
            twoDA.push([word[i], 'T']);
        } else if (word[i] === 'T') {
            twoDA.push([word[i], 'A']);
        } else if (word[i] === 'C') {
            twoDA.push([word[i], 'G']);
        } else if ([word[i] === 'G']) {
            twoDA.push([word[i], 'C']);
        }
    }

    return twoDA;
}
