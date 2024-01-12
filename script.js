// Get elements
const billInput = document.querySelector(".bill-input");
const buttons = document.querySelectorAll(".button-container button");
const tipOutput = document.querySelector(".tip-total");
const billOutput = document.querySelector(".bill-total");
const clearBtn = document.querySelector(".clear");

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
  tipOutput.textContent = `$${tip.toFixed(2)}`;
  billOutput.textContent = `$${totalBill.toFixed(2)}`;
}

// Handle Tip Buttons
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    const billAmount = parseFloat(billInput.value);
    const target = e.target;
    let percent = parseFloat(target.className.slice(1));

    if (isNaN(billAmount)) {
      alert("Please enter a valid number");
      billInput.value = "";
    } else {
      const tip = calculateTip(percent, billAmount);
      const totalBill = calculateTotalBill(tip, billAmount);
      renderOutput(tip, totalBill);
    }
  });
}

// Handle Clear Button
clearBtn.addEventListener("click", () => {
  renderOutput(0, 0);
  billInput.value = "";
});
