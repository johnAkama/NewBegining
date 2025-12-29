'use strict';

let contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points'],
    },
    {
        firstName: 'Harry',
        lastName: 'Potter',
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid'],
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin'],
    },
    {
        firstName: 'Kristian',
        lastName: 'Vos',
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes'],
    },
];

function lookUpProfile(name, property) {
    let nameExists = false;
    let propertyExists = false;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            nameExists = true;
            if (contacts[i].hasOwnProperty(property)) {
                return contacts[i][property];
            } else {
                propertyExists = false;
            }
        }
    }

    if (!nameExists) {
        return 'No such contact';
    }
    if (!propertyExists) {
        return 'No such property';
    }
}

console.log(lookUpProfile('Akira', 'likess'));
