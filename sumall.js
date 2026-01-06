function sumAll(args) {
    let sum = 0;
    const start = Math.min(args[0], args[1]);
    const end = Math.max(args[0], args[1]);
    /*  args.reduce((_, curr) => {
        sum += curr;
    }, 0); */

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAll([1, 4])); // 10
