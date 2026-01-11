'use strict';

function whatIsInAName(arrayObj, source) {
    return arrayObj.filter((obj) => {
        return Object.keys(source).every((key) => obj[key] === source[key]);
    });
}
