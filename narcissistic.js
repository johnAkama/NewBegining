function narcissistic(value) {
    // code will return true or false.
    let numArr = value.toString().split('').map(Number); //
    const sumTotal = numArr.reduce((sum, values) => {
        return sum + Math.pow(values, numArr.length);
    });
    return sumTotal === value;
}

console.log(narcissistic(153));
