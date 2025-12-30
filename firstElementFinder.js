function fundElement(arr, func) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i])) {
                return arr[i];
            }
        }
    }
}

console.log(
    fundElement(['hello', 'world', 'javascript'], (str) => str.length % 2 === 0)
); // 2
``;
