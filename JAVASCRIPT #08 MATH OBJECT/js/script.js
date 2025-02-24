// JAVASCRIPT MATH OBJECT 08

// Math = Built-in object that provides a collection of properties and methods

let x = 3;
let y = 2;
let z = 1;

// z = Math.round(x); // Round to the nearest integer
// z = Math.floor(x); // Round down
// z = Math.ceil(x); // Round up
// z = Math.trunc(x); // Remove the decimal part
// z = Math.pow(x, y); // Raise x to the power of y (x^y) 3*3 = 9
// z = Math.sqrt(x); // Square root of x(81) = 9
// z = Math.log(x); // Natural logarithm of x like for example log(10) = 2.302585092994046
// z = Math.sin(x); // Sine of x like for example sin(45) = 0.8509035245341184
// z = Math.cos(x); // Cosine of x like for example cos(45) = 0.5253219888177297
// z = Math.tan(x); // Tangent of x like for example tan(45) = 1.6197751905438615
// z = Math.abs(x); // Absolute value of x like fo example abs(-3.21) = 3.21 (Eliminates the negative sign)
// z = Math.sign(x); // Sign of x like for example sign(-3.21) = -1 (Returns 1 if positive, -1 if negative, and 0 if zero)
let max = Math.max(x, y, z); // Returns the largest of zero or more numbers
let min = Math.min(x, y, z); // Returns the smallest of zero or more numbers

console.log(max); // Output: 3
console.log(min); // Output: 1