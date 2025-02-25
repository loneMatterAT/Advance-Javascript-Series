// RANDOM NUMBER GENERATOR

// Sample
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// Function of 6 sided Dice Roll
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

// This will generate a random number between 1 and 6
myButton.onclick = function() {
  randomNum1 = Math.floor(Math.random() * max) + min; // This will generate a random number between 1 and 6. The formula is Math.floor(Math.random() * (6 - 1)) + 1;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;

  // This will display the random number in the label
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
}