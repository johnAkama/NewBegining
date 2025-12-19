'use strict';
const programmingLanguages = [
    'JavaScript',
    'Python',
    'C+++',
    { name: 'Java', age: 20 },
];

/* console.log(programmingLanguages[3]); */
let sliceArray = programmingLanguages.slice(2);
programmingLanguages[3].name = 'C#';

console.log(sliceArray);
