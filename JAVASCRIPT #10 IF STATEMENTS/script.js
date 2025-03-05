// JAVASCRIPT LESSON 10: IF STATEMENTS
// If a condition is true, execute some code. If false or not, do something else.

// Example 1
// let age = 13;

// if(age >= 25){
//   console.log("You are old enough to enter this site.");
// }else{
//   console.log("You must be 18+ to enter this site.");
// }

// // Example 2
// let time = 8;

// if(time < 12){
//   console.log("Good morning!");
// }else{
//   console.log("Good afternoon!");
// }

// // Example 3: Using boolean variable
// let isStudent = false;

// if(isStudent){
//   console.log("You are a student.");
// }else{
//   console.log("You are not a student.");
// }

// // Example 4: Nested if statements with two variables
// let customerAge = 20;
// let hasLicense = false;

// if(customerAge >= 16){
//   console.log("You are old enough to drive.");

//   if(hasLicense){
//     console.log("You have your license.");
//   }
//   else{
//     console.log("You do not have your license yet!");
//   }

// }
// else{
//   console.log("You must be 16+ to have a license.")
// }

// // Example 5: Else if statement
// let studAge = 101;

// if(studAge >= 100){
//   console.log("You are too old to enter this site.");
// }
// else if(age == 0){
//   console.log("You can't enter. You were just born.");
// }
// else if(studAge >= 18){
//   console.log("You are old enough to enter this site.");
// }
// else if(studAge < 0){
//   console.log("You are not born yet and your age can't be below 0.");
// }
// else if(studAge >= 100){
//   console.log("You are too old to enter this site.");
// }
// else{
//   console.log("You must be 18+ to enter this site.");
// }

// // Example 6: Nested else if statement
// let weatherTemp = 33;
// let hasSuspension = true;

// if(weatherTemp <= 27 && weatherTemp <= 32){
//   console.log("Caution: It is hot outside.");
// }
// else if(weatherTemp <= 33 && weatherTemp <= 41){
//   console.log("Warning: It is very hot outside.");

//   if(hasSuspension){
//     console.log("Classes are suspended.");
//   }
//   else{
//     console.log("Classes are not suspended, but be careful.");
//   }
// }
// else if(weatherTemp <= 42 && weatherTemp <= 51){
//   console.log("Danger: It is extremely hot outside.");
// }
// else if(weatherTemp <= 52){
//   console.log("Extreme Danger: It is dangerously hot outside.");
// }
// else{
//   console.log("Normal weather.");
// }

// Exercise 1
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let studAge;

mySubmit.onclick = function(){
  studAge = myText.value;
  studAge = Number(studAge);

  if(studAge >= 100){
    resultElement.textContent = `You are too old to enter this site.`;
  }
  else if(studAge == 0){
    resultElement.textContent = `You can't enter. You were just born.`;
  }
  else if(studAge >= 18){
    resultElement.textContent = `You are old enough to enter this site.`;
  }
  else if(studAge < 0){
    resultElement.textContent = `You are not born yet and your age can't be below 0.`;
  }
  else if(studAge >= 100){
    resultElement.textContent = `You are too old to enter this site.`;
  }
  else{
    resultElement.textContent = `You must be 18+ to enter this site.`;
  }
}



