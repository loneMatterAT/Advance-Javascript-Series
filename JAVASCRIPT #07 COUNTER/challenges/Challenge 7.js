// JAVASCRIPT CHALLENGE 07

const decreaseBtn = document.getElementById("decreaseBtn");
const clearBtn = document.getElementById("clearBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
const addBtn = document.getElementById("addBtn");
const addedLabel = document.getElementById("addedLabel")
const priceLabel = document.getElementById("priceLabel")
let count = 1;  // Count default to 0

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
clearBtn.onclick = function(){
  count = 1;
  countLabel.textContent = count;
  addedLabel.textContent = "";
  priceLabel.textContent = `₱18,990.00`;
}

// Added message
addBtn.onclick = function(){
  addedLabel.textContent = `✓ Item added succesfully`;
}

// Increment price
increaseBtn.onclick = function(){
  count++;
  let addingItem = 18990 * count;
  priceLabel.textContent = `₱${addingItem}`;
  countLabel.textContent = count;
}

// Decrement price
decreaseBtn.onclick = function(){
  count--;
  let addingItem = (18990 * count);
  let removeItem = addingItem - 0;
  priceLabel.textContent = `₱${removeItem}`;
  countLabel.textContent = count;
}

