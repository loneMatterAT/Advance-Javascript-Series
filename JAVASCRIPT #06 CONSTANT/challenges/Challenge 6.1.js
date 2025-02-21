// JAVASCRIPT CHALLENGE 06.1

let year;

document.getElementById("mySubmit").onclick = function() {
  year = document.getElementById("myText").value;
  year = Number(year);

  // Formula and Conditions of ODD OR EVEN
  if(year === "" || year === 0) {
    alert(`Year ${year} is Not a valid year. Try again...`);
    document.getElementById("myH4").textContent = `Year ${year} is Not a valid year. Try again...`;
  }else if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    alert(`Year ${year} is a Leap year.`);
    document.getElementById("myH4").textContent = `Year ${year} is a Leap year.`;
  }else{
    alert(`Year ${year} is Not a Leap year.`);
    document.getElementById("myH4").textContent = `Year ${year} is Not a Leap year.`;
  }
  
  console.log(year);
}