function smallestCommons(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);

    // Helper: Greatest Common Divisor (Euclidean algorithm)
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Helper: Least Common Multiple
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let result = min;

    for (let i = min + 1; i <= max; i++) {
        result = lcm(result, i);
    }

    return result;
}
