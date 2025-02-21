// JAVASCRIPT CHALLENGE 03 : USER INPUT

// Empty variables
let fullName;
let birthDate;
let sex;
let address;
let contact;
let cStatus;
let course;
let school;
let start;
let end;

document.getElementById("mySubmit").onclick = function() {
  fullName = document.getElementById("fullname").value;
  birthDate = document.getElementById("birthdate").value;
  sex = document.getElementById("sex").value;
  address = document.getElementById("address").value;
  contact = document.getElementById("contact").value;
  cStatus = document.getElementById("status").value;
  course = document.getElementById("course").value;
  school = document.getElementById("school").value;
  start = document.getElementById("date-start").value;
  end = document.getElementById("date-end").value;

  // Bio Data Summary
  document.getElementById("myH1").textContent = `You are hired ${fullName}!`;

  alert(`BIO DATA SUMMARY\nFullname : ${fullName}\nBirthdate : ${birthDate}\nSex : ${sex}
    \nAddress : ${address}\nContact No : ${contact}\nCivil Status : ${cStatus}\nCourse : ${course}
    \nSchool : ${school}\nDate Started : ${start}\nDate Ended : ${end}`);
}