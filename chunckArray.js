'use strict';

function chunkArrayInGroups(arr, size) {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
}

const arrayNum = ['1', '3', '3', '4', '5', '6', '7', '8'];
console.log(chunkArrayInGroups(arrayNum, 3));
