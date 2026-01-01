function pyramid(pattern, rows, bool) {
    let result = '';

    if (bool) {
        let tab = ' ';
        for (let i = 0; i < rows; i++) {
            console.log(
                '\n' + tab.repeat(rows - i) + pattern.repeat(2 * i + 1) + '\n'
            );
            result += '\\n' + tab.repeat(rows - i) + pattern.repeat(2 * i + 1);
        }
    } else {
        let tab = ' ';
        for (let i = rows - 1; i >= 0; i--) {
            console.log(
                '\n' + tab.repeat(rows - i) + pattern.repeat(2 * i + 1) + '\n'
            );
            result += '\\n' + tab.repeat(rows - i) + pattern.repeat(2 * i + 1);
        }
    }
    return result;
}

console.log(pyramid('p', 4, true));
