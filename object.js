/* const person = {
    name: 'Bob',
    age: 25,
    job: 'Designer',
    city: 'New York',
};

const { job, city, ...newObjectCreated } = person;

console.log(newObjectCreated);
console.log(job) */

/* let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

delete car.year;
console.log(car.year); */

const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false