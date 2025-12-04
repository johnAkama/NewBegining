'use strict';

const PromptSync = require('prompt-sync');

/* let programminName = prompt('Enter Javascript Official Name', 'Type here');
import * as assert from 'assert';
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

/* function showMessage(from, text) {
    alert(from + ' : ' + text);
}

showMessage('Kaneshie', 'I am standed, please call the police'); */

/* function showCount(count) {}

alert(typeof(showCount())); */

/*function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert(i); // a prime
    }
}
showPrimes(9);*/

/* function checkAge(age) {
    return age > 18 ? 'You are ' + age + ' years old' : 'You are underage, we cannot process your files at the moment';
}
alert(checkAge(10)); */

/* function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

alert(min(1, 10)) */

/* let a = prompt('Enter number x');
let b = prompt('Ente');

function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        console.log(result);
        console.log(a)
        result = result * a;
    }
}
pow(a, b); */

/* Arrow function */
/* function ask(question, yes, no) {
    if (confirm(question)); yes();
    else no();
}

ask(
    'do you agree ?',
    () => {
        alert('You agreed');
    },
    () => {
        alert('you canceled the execution');
    }
);*/

/* describe('pow', function () {
    it('raises to n-th power', function () {
        assert.equal(pow(2, 3), 8);
    });
}); */

/********************************* Object *********************************/

/* const prompt = require('prompt-sync')();

let nameUser = prompt("Enter your name: ","Orange");

let person = {
    [nameUser]: 'John',
    age: 30,
    city: 'New York'
};
console.log('aged' in person); */
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};


function sumSalaries(salaries) {
    let sum = 0;
    if (Object.keys(salaries).length === 0) {
        return 0;
    } else {
        for (let key in salaries) {
            sum = sum + salaries[key];
        }
    }
    return sum;
}
 */

/* let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

function multiplyNumeric(menu) {
    if (Object.keys(menu).length === 0) {
        return 0;
    } else {
        for (let key in menu) {
            if (typeof menu[key] === 'number') {
                menu[key] = menu[key] * 2;
            }
        }
    }
    return menu;
} */

// Object copying using the Object.assign method
//  Sample Object
/* let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50,
    },
};

let clone = Object.assign({}, user); */

/* function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    };
}

let family = marry({ name: 'John' }, { name: 'Ann' });
const testObject = {
    userName: 'JOhn Walker',
};

testObject.age = 30;
family = null;

console.log(family); */

// This key word for objects
//let user = { name: 'John', age: 30 };

/* user.syHi = function () {
    console.log('hi');
};

user.syHi();

console.log(user) */

/*let user = { name: 'John' };
let admin = { name: 'Admin' };
function sayHi() {
    console.log(this.name);
}
user.f = sayHi; 
console.log(user.f());*/

/* function makeUser() {
    return {
        name: 'John',
        ref() {
            return this;
        },
    };
}

let user = makeUser();
console.log(user.ref().name); */
/* 
const prompt = require('prompt-sync')();

let calculator = {
    read() {
        this.a = +prompt('Enter number a: ', 'Type here');
        this.b = +prompt('Enter number b: ', 'Type here');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

console.log(calculator.read()); */
/* function testTarget(name) {
    if (!new.target) {
        return new testTarget(name);
    }

    this.name = 'Best';
}

let user = testTarget('hello');
console.log(user.name); */

/* console.log(' The sum of a and b is : ' + calculator.sum());
console.log(' This the multiplication of a and b: ' + calculator.mul()); */

/* let Obj = { name: 'test' };
let Obj_2 = { name: 'test' };

function A() {
    return Obj;
}
function B() {
    return Obj;
}

console.log(new A() == new B()); */

/* const prompt = new PromptSync();

function calculator() {
    this.read = function () {
        this.a = +prompt('Ente number a: ', 0);
        this.b = +prompt('Enter numberb: ', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calc = new calculator();
calc.read();
console.log(calc.sum());
console.log(calc.mul());
 */

/* const prompt = new PromptSync();

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += + +prompt('Ente value to add: ', 0);
    };
}
let accumulator = new Accumulator(20);

accumulator.read();
accumulator.read();
console.log(accumulator.value);
 */

/********************************* Data types *********************************/

let n = 66.7876655;
console.log(n.toFixed(2));
