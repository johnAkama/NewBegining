const testAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function longestArray(arr) {
    let subArry = [];
    for (let i = arr.length; i > 0; i--) {
        subArry.push(Math.max(...arr));
    }
    return subArry;
}
