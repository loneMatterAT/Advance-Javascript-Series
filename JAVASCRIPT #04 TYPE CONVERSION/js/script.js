// JAVASCRIPT TYPE CONVERSION 04

// Type conversion = change the datatype of a value to another (strings, numbers, booleans)
let age = window.prompt("How old are you?");
age = Number(age); // Age(strings converts to number)
age+=1;

console.log(age, typeof age);

// Example 2
let x = "0";
let y = "pizza";
let z = "";
let n;

x = Number(x);
y = String(y);
z = Boolean(z);
n = Number(n);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(n, typeof n);