'use strict';

//using sort() method
/* function sumTwoSmallestNumbers(numbers) {
    // Code here
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}
 */
//using the reduce method()

function sumTwoSmallestNumbers(numbers) {
    return numbers
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((accumulator, values) => accumulator + values);
}

console.log(sumTwoSmallestNumbers([4, 2, 3, 7, 1]));
