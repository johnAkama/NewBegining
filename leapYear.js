function isLeapYear(args) {
    if ((args % 4 == 0 && args % 100 != 0) || args % 400 == 0) {
        return args + ' is a leap year';
    } else {
        return args + ' is not a leap year';
    }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);
