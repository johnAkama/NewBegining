/* const numbers = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numbers.forEach((num) => {
    sum += num;
});
console.log('forEach result:', sum); // undefined

const mapRes = numbers.map((num) => {
    return (sum += num);
});
console.log('map result:', mapRes); // [1, 2, 3, 4, 5]
console.log('Final sum:', sum); // 15 */

//console.log([, undefined, 'a', 'b', { 20: 5 }].sort());

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

// Convert the object values into an array and then use map
const mappedValues = Object.values(obj).map((value) => value * 2);
console.log(mappedValues); // Output: [2, 4, 6]

const mappedKeys = Object.keys(obj).map((key) => console.log(key));
console.log(mappedKeys); // Output: ['a', 'b', 'c']

const mappedEntires = Object.entries(obj).map((entries) =>
    console.log(entries)
);
console.log(mappedEntires); //