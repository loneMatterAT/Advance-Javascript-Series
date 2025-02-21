// JAVASCRIPT ARITHMETIC OPERATORS 05

// Arithmetic operators = Operands (values, variables, etc.)
//                        Operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;

// Examples of Arithmetic Operators Declaration
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students / students + 2;
// students = students ** 2;
// let extraStudents = students % 3;

// Examples of Augmented Assignment Operators
// students +=1;
// students -=1;
// students *= 2;
// students /= 2;
// students **=2;
// students %=2;

// Examples of Increment & Decrement Operators
// students++;
// students--;

/*
  Operator Precedence Rule (PEMDAS LEFT TO RIGHT)
  1. Parenthesis ()
  2. Exponents
  3. Multiplication & Division & Modulo
  4. Addition & Subtraction
*/
// Examples of Operator Precedence
let result1 = 1 + 2 * 3 + 4 ** 2;
//  1 + 2 * 3 + 16
// 1 + 6 + 16
// Answer : 23

let result2 = 12 % 5 + 8 / 2;
// 2 + 8 / 2
// 2 + 4
// Answer : 6

let result3 = 6 / 2 ** (2 + 5);
// 6 / 2 ** (7)
// 6 / 128
// Answer : 0.046875


console.log(result3);