function dropElements(arr, func) {
    while (arr.length > 0 && func(arr[0]) === false) {
        arr.shift();
    }
    /* for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === false) {
            console.log(arr.splice(i, 1));
        } else {
            break;
        }
    } */
    return arr;
}

const result = dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
}); // should return [1, 1]
console.log(result);
