function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(
            Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
        );
    }, []);
}

console.log(flattenArray([1, [], [3, [[4]]]]));
