function titleCase(strgs) {
    let stringData = strgs.split(' ');
    let titleSent = [];
    for (let i = 0; i < stringData.length; i++) {
        let word = stringData[i];
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1).toLowerCase();
        titleSent.push(firstLetter + restOfWord);
    }

    return titleSent.join(' ');
}

console.log(titleCase('Hello World From JavaScript'));
