function getIndexToIns(arr, num) {
    if (arr.length === 0) return 0;
    let sortedArray = arr.sort((a, b) => a - b);
    let index = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (num - sortedArray[i] < 0 && i < sortedArray.length) {
            index += i;
            sortedArray.splice(i, 0, num);
            break;
        } else if (i === sortedArray.length - 1 && num - sortedArray[i] >= 0) {
            index = sortedArray.length;
            sortedArray.push(num);
            break;
        }
    }
    return sortedArray.findIndex((element) => element === num);
}

console.log(getIndexToIns([3, 10, 5], 11));
