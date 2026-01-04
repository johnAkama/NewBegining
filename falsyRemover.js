function bouncer(arr) {
    let falsy = [false, null, 0, '', undefined, NaN];
    let arrNew = arr;

    for (let i = 0; i < falsy.length; i++) {
        arrNew = arrNew.filter(
            (value) => value !== falsy[i] && !Number.isNaN(value)
        );
    }
    return arrNew;
}

console.log(bouncer([false, null, 0, NaN, undefined, '']));
