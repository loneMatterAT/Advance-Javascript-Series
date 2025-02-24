// JAVASCRIPT COUNTER PROGRAM 07

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;  // Count default to 0

// Increment count
increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

// Decrement count
decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

// Reset count
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}