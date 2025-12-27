let num = 20;
const factorialCalculator = (numbers) => {
    let result = 1;
    while (numbers > 0) {
        result = result * numbers;
        console.log(result);

        numbers--;
    }
    return result;
};

let factorial = factorialCalculator(num);

console.log('Factorial of ' + num + ' is ' + factorial + '');
