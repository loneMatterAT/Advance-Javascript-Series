// JAVASCRIPT CHALLENGE 10

const userName = document.getElementById("myText");
const password = document.getElementById("myPassword");
const myResult = document.getElementById("myResult");
const mySubmit = document.getElementById("mySubmit");
let myName;
let myPass;

mySubmit.onclick = function(){
  myName = userName.value;
  myPass = password.value;


  if(userName.value == "admin" && password.value == "123"){
    myResult.textContent = `You are logged in ${userName.value}.`;
    myResult.style.color = "green";
  }
  else if(userName.value == "admin" && password.value != "123"){
    myResult.textContent = `Wrong password for ${userName.value}.`;
  }
  else if(userName.value != "admin" && password.value == "123"){
    myResult.textContent = `Wrong username for ${userName.value}.`;
  }
  else{
    myResult.textContent = `Wrong username and password. Try again...`;
  }
}