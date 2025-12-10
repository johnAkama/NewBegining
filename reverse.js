function reverseString(s) {
    try {
        let reverse = s.split('').reverse().join('');
        console.log(reverse);
    } catch (e) {
        console.log(e.message);
    }
}

reverseString(12234);
