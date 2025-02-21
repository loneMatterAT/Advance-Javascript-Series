// JAVASCRIPT CONST 06

// const = a variable that can't be changed

// Find the radius of circle
// const PI = 3.14159;  // We can't change this value of PI
// let radius;
// let circumference

// radius = window.prompt(`Enter the radius of a circle : `);
// radius = Number(radius);

// // Formula
// circumference = 2 * PI * radius;

// console.log(circumference);

// Displays the answer on webpage
const PI = 3.14159;  // We can't change this value of PI
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
  radius = document.getElementById("myText").value;

  // Display answer on textbox
  // document.getElementById("").textContent = `You are hired ${fullName}!`;

  // Formula
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = `Answer : ${circumference}cm`;

  alert(`Answer : ${circumference}cm`);
}