function sumFibs(num) {
    const fibs = [1, 1];

    // Build Fibonacci numbers up to num
    while (true) {
        const next = fibs[fibs.length - 1] + fibs[fibs.length - 2];
        if (next > num) break;
        fibs.push(next);
    }

    // Sum only odd Fibonacci numbers
    return fibs.reduce((sum, n) => {
        if (n % 2 !== 0) {
            return sum + n;
        }
        return sum;
    }, 0);
}
