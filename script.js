// Get elements
const billInput = document.querySelector(".bill-input");
const buttons = document.querySelector(".button-container");

// Global

// Calculate tip
function calculateTip(percentage, bill) {
  return percentage * bill;
}

// Calculate bill total
function calculateTotalBill(tip, bill) {
  return tip + bill;
}

// Render Outputs to the DOM
function renderOutput(tip, totalBill) {
  // DOM stuff
}

// Handle Tip Amount Buttons
buttons.addEventListener("click", (e) => {
  const billAmount = parseFloat(billInput.value);
  const target = e.target;
  let percent = parseFloat(target.className.slice(1));

  if (isNaN(billAmount)) {
    alert("Please enter a valid number");
  } else {
    const tip = calculateTip(percent, billAmount);
    const totalBill = calculateTotalBill(tip, billAmount);
  }
});
