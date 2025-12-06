/* 'use strict'; */

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
/* let n = 66.7876655;
console.log(n.toFixed(2)); */

/* let str = 'Hello';
str.test = 5;

console.log(str.test) */

/******************************* Strings  ***************************************/

/* function sum(a, b) {
    return a + b;
}

console.log(`1+2 = ${sum(3, 5)}`); */

/* let str = 'Hello'; */

/* console.log(str[0]);
console.log(str.at(0));
console.log(str.length - 1);
console.log(str.at(-1));
 */

/* for (let key of str) {
    console.log(key);
}
 */

/* let str = 'As sly as a fox, as strong as an ox';
let target = 'l';

let pos = 0;

while (true) {
    let foundPos = str.indexOf(target, pos); //Search for the target string starting from position 'pos'
    if (foundPos === -1) break; //Did not find the target, exit the loop

    console.log(`Fond item at position ` + foundPos); //Log the position where the target was found
    pos = foundPos + 1; //Move to the next position after the found one
} */

/* let str = 'stringify';
console.log(str.substr(-4,3)) */

/* console.log('e'.codePointAt()); */

/* function ucFirst(str) {
    if (!str) return str; //Check if the string is empty or falsy, return it as is)
    return str[0].toUpperCase() + str.substr(1);
}

console.log(ucFirst('akama')); */

/* function checkSpam(str) {
    if (!str) return str;
    let lowerStr = str.toLowerCase(); //Convert the input string to lowercase for case-insensitive comparison
    return lowerStr.includes('viagra') || lowerStr.includes('xxx'); //Check if the string contains 'viagra' or 'xxx'
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit')); */

/* function truncate(str, maxLenght) {
    if (!str) return str;
    if (str.length > maxLenght) {
        let finalStr = str.slice(0, maxLenght - 1) + '…'; //Truncate the string and add an ellipsis if it exceeds the maximum length
        return finalStr.length;
    }
}

console.log(truncate('What I know about Javascript', 16));
console.log(truncate('Hello World', 8)); */

/* function extractCurrencyVale(cost) {
    if (!cost) return cost;
    return +cost.slice(1);
}
console.log(extractCurrencyVale('$120')); */

/* function startTime() {
    return Date.now();
}

function endTime() {
    return Date.now();
}

function diffTime(start, end) {
    return end - start;
}

function checkRunTime() {
    let sumArray = [
        100, 22, 334, 45, 66, 78, 89, 90, 123, 456, 789, 234, 567, 890, 3, 4,
        55, 6, 7, 4, 5, 67, 8, 9, 0, 12, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66,
        77, 88, 99, 100, 101, 202, 303, 404, 505, 606, 707, 808, 909, 111, 222,
        333, 444, 555, 666, 777, 888, 999, 110, 220, 330, 440, 550, 660, 770,
        880, 990, 121, 232, 343, 454, 565, 676, 787, 898, 909, 131, 242, 353,
        464, 575, 686, 797, 808, 141, 252, 363, 474, 585, 696, 707, 181, 292,
        393, 494, 595, 606, 212, 323, 434, 545, 656, 767, 878, 989,
    ];
    let start = startTime();
    sumArray.shift();
    let end = endTime();

    return end - start;
}

console.log('Time taken: ' + checkRunTime() + 'ms'); */

/* let fruits = ['Apple', 'Orange', 'Plum'];

for (let fruit in fruits) {
    console.log(fruits[fruit]);
} */

/* let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-ROll'); // add item to the end
styles[Math.floor((styles.length - 1) / 2)] = 'Classics'; // replace the value of the middle item
console.log(styles.shift()); // remove first item
styles.unshift('Rap', 'Reggae'); // add items to the beginning

console.log(styles); */

/* let arr = ['a', 'b'];

arr.push(function () {
    console.log('calling this function');
    return true;
});

console.log(arr[2]()); // ? */

/* function sumInutArray() {
    const prompt = new PromptSync();
    let arrSum = [];
    let value;
    let con = true;

    let sum = 0;
    do {
        value = prompt('Enter value to add to the array: ', 'Type here');
        if (value == '' || value == null || !isFinite(value) || value === NaN) {
            con = false;
            for (let i = 0; i < arrSum.length; i++) {
                sum = sum + +arrSum[i];
            }
        } else {
            arrSum.push(value);
        }
    } while (con);
    console.log(arrSum);
    return sum;
}



console.log(sumInutArray()); */

function getMaxSubSum(arr) {
    let maxSum = 0;
    let temporalSm = 0;
    let temporalSm2 = 0;

    for (let i = 0; i < arr.length; i++) {
        temporalSm += arr[i]; // Add the current element to the temporary sum
        let arr2 = arr.slice(i + 1); // Create a new array excluding the current element
        console.log('Temporary Sum 1: ' + temporalSm);

        for (let j = 0; j < arr2.length; j++) {
            temporalSm2 += arr2[j];
            console.log('Temporary Sum 2: ' + temporalSm2);
            /* temporalSm += arr2[j];
            if (temporalSm > maxSum) {
                maxSum = temporalSm;
            } */
        }
        //arr.shift();
    }
    return true;
}

// Function to create a random array
/* function randomArray(length, min, max) {
    return Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );
} */

console.log(getMaxSubSum([2, 1, -5, 4, -3, 6]));
