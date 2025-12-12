/* function digitalRoot(n) {
    let sum = 0;
    while (n > 0) {
        let numberDigit = ('' + n).split('').map(Number);
        sum =
            sum +
            numberDigit.reduce((accumulator, values) => {
                return accumulator + values;
            });
        return sum > 9 ? digitalRoot(sum) : sum;
    }
} */

function digitalRoot(n) {
    let stepOne = (n - 1) % 9;
    return stepOne + 1;
}
console.log(digitalRoot(4));
