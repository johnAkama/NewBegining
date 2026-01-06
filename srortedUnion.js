function uniteUnique() {
    let argArray = Array.from(arguments);
    let newArray = [];
    for (let i = 0; i < argArray.length; i++) {
        for (let j = 0; j < argArray[i].length; j++) {
            newArray.push(argArray[i][j]);
        }
    }

    return [...new Set(newArray)];
}
