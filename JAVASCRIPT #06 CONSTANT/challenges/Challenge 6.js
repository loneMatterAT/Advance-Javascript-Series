// JAVASCRIPT CHALLENGE 06

let number;

document.getElementById("mySubmit").onclick = function() {
  number = document.getElementById("myText").value;
  number = Number(number);

  // Formula and Conditions of ODD OR EVEN
  if(number % 2 == 0) {
    alert(`Number ${number} is an Even Number.`);
    document.getElementById("myH4").textContent = `Number ${number} is an Even Number.`;
  }else{
    alert(`Number ${number} is an Odd Number.`);
    document.getElementById("myH4").textContent = `Number ${number} is an Odd Number.`;
  }

  // Reload the webpage
  // document.getElementById("myReload").onclick = function() {
  //   function reloadPage() {
  //     location.reload(); // Page reload
  //   }
  // }
  
  console.log(number);
}