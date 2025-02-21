// JAVASCRIPT USER INPUT 03

// How to accept user input
// 1. EASY WAY = window prompt
let username;
username = window.prompt(`What's your username?`);
console.log(`Your username is ${username}.`);

// 2. PROFESSIONAL WAY = HTML textbox
// User enter a name in HTML textbox and when the user click the submit button,
// the username that user enter on HTML textbox will display on the console and the h1 title change on webpage.
let userName; // Empty 

document.getElementById("mySubmit").onclick = function() {
  userName = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${userName}!`;
  console.log(userName);
}