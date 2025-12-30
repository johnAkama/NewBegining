function frankenSplice(arr1, arr2, index) {}

const arraySample1 = [1, 2, 3];
const arraySample2 = [4, 5, 6];
const indexSample = 1;
let arraycopy = arraySample2.slice();
arraycopy.splice(indexSample, 0, ...arraySample1);
console.log(arraycopy); // Output: [4, 1, 2, 3, 5, 6]
