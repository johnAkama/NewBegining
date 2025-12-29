function repeatStringNumTimes(strg, num) {
    let newString = '';
    for (let i = 0; i < num; i++) {
        newString = newString + strg;
    }
    return newString;
}
