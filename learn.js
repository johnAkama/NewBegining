'use strict';
/* let programminName = prompt('Enter Javascript Official Name', 'Type here');
programminName === 'ECMAScript'
    ? alert('right')
    : alert(`You don't know? “ECMAScript”!`) */

/* let numberToCompared = prompt('Number', 'Enter number here');

if(numberToCompared > 0) {
    alert(1);
} else if(numberToCompared < 0) {
    alert(-1);
} else {
    alert(0);
} */

/* let result;

a + b < 4 ? (result = 'Below') : (result = 'Over') */

/* let message =
    login === 'Employee'
        ? (message = 'Hello')
        : login === 'Director'
        ? (message = 'Greetings')
        : (login = '' ? (message = 'No login') : (message = ''));

alert(message);
 */
/* 
alert( null || 2 || undefined ); */
/* 
if (-1 || 0) alert('first'); */

/* let i = 0;
while (++i < 5) alert( i );
 */

/* let i = 0;
while (i++ < 5) alert( i ) */

/* for (let i = 0; i < 5; i++) alert( i ) */

/* for (let i = 0; i < 5; ++i) alert( i ) */

/* for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        alert(i); 
    }
} */

/* let i = 0;
while (i < 3) {
    alert(`number ${i++}!`)
}
 */

//Declare the varible
/* let n = prompt('enter number', 'Type here');
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        console.log(`evaluer ` + i + ` avec ` + j);
        if (i % j === 0) {
            isPrime = false;
            /* console.log(`Remove` + i);
            break;
        }
    }
    if (isPrime) {
        console.log(`kept` + i);
    }
} */

/* // Outer Variable
let userName = 'John';
//Function
function setTry() {
    let userName = 'Bob';
    let message = 'Hello, ' + userName; //Bob
    alert(message);
}

setTry();
alert(userName);
 */

function showMessage(from, text) {
    alert(from + ' : ' + text);
}

showMessage('Kaneshie', 'I am standed, please call the police');
