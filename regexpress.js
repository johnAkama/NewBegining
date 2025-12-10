'use strict';

function regexVar(s) {
    let re = new RegExp(/^([aeiou]).*\1$/);
    return re.test(s);
}

console.log(regexVar('afddsd'));
