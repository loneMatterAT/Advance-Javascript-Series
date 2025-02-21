// JAVASCRIPT VARIABLES 02
/*
  Variable = A container that stores a value.
  Behaves as if it were the value it contains.
  Each variable name is should be unique and cannot redeclared.

  1. Description - let x;
  2. Assignment - x = 100;
*/

// DATATYPES

// Numbers
let x = 123;
console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age); // Knowing what type of datatype
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`Your gpa is : ${gpa}.`);

// Strings
let firstName = "Boy";
let favFood = "Chicken"
let email = "Boy@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}.`);
console.log(`You like ${favFood}.`);
console.log(`Your email is ${email}.`);

// Booleans
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Boy is online : ${online}`);
console.log(`Is this car for sale : ${forSale}`);
console.log(`Enrolled : ${isStudent}`);

// All Datatypes Combined
let fullName = "Boy Man";
let pAge = 25;
let studStatus = false;

// It displays on webpage
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${pAge} years old`;
document.getElementById("p3").textContent = `Enrolled : ${studStatus}`;










