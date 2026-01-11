'use strict';

function diffArray(arr1, arr2) {
    const combined = arr1.concat(arr2);
    return combined.filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArray([1, 2, 3], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(diffArray(['a', 'b'], ['b', 'c'])); // ['a', 'b', 'b', 'c']
