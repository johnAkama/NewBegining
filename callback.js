let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index, array) {
    //console.log(`${number} is at index ${index} in ${array}`);
    console.log(typeof number, typeof index, typeof array);
});
