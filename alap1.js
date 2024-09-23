/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
*/

/*
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
*/
/*const words = ['apple', 'banana', 'cherry'];
const wordLengths = words.map(word => word.length);
console.log(wordLengths); // [5, 6, 6]

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ];
  
  const userNames = users.map(user => user.name);
  console.log(userNames); // ['Alice', 'Bob']
  
  var names = ['Alice', 'Bob', 'Charlie'];
names.forEach(function(name) {
  console.log(name);
});
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log(name));
*/
/*
var person = {
    name: 'John',
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  console.log(person.greet()); // Hello, John
*/
  /*const person = {
    name: 'John',
    greet() {
      return 'Hello, ' + this.name;
    }
  };
  console.log(person.greet()); // Hello, John
  
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3)); // 5
*/
 /* const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

var numbers = [1, 2, 3];
var squared = numbers.map(function(num) {
  return num * num;
});
console.log(squared); // [1, 4, 9]


const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]
*/
/*
const person = { name: 'Alice', address: { city: 'New York', country: 'USA' } }; 
const { name, address: { city, country } } = person; 
//const name = person.name;
//const city = person.address.city;
//const country = person.address.country;
console.log(name); // Alice 
console.log(city); // New York 
console.log(country); // USA

// kétszer nem lehet létrehozni ugyanolyan névvel:
const person2 = { name: 'Alice', address2: { city2: 'New York', country2: 'USA' } }; 
const { name2, address2: { city2, country2 } } = person2; 
//const name = person.name;
//const city = person.address.city;
//const country = person.address.country;
console.log(name2); // Alice 
console.log(city2); // New York 
console.log(country2); // USA

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first); // 1
console.log(second); // 2

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
*/
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

const obj1 = { name: 'John' };
const obj2 = { name2: 'John2' };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { name: 'John', age: 25 }


const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;
const newNumbers = [...rest, first];
console.log(newNumbers); // [2, 3, 4, 5, 1]
*/

