function closureTest(a) {
    return (b) => {
        return a - b;
    };
}
let resultFunction = closureTest(10);
console.log(resultFunction(4)); // Outputs: 6
console.log(resultFunction(10)); // Outputs: 0
console.log(closureTest(10)(5)); // Outputs: 0
