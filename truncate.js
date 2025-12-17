function truncateString(word, num) {
    word = word.toString();
    if (word.length > num) {
        return word.slice(0, num) + '...';
    } else if (word.length <= num) {
        return word;
    }
}

console.log(
    truncateString(
        'A-tisket a-tasket A green and yellow basket',
        'A-tisket a-tasket A green and yellow basket'.length
    )
);
