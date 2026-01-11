function destroyer(arr, ...args) {
    return arr.filter((item) => !args.includes(item));
    /* for (let item of args) {
        
    } */
    //return arrCopy;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [[1, 1], [1, 1]]
