
let selectedTip = 0; 

// Add event listeners to tip buttons
document.querySelectorAll(".tip-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Parse the tip percentage from the button
    selectedTip = parseFloat(this.getAttribute("data-tip"));

    // Highlight the selected tip button
    document.querySelectorAll(".tip-btn").forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Add functionality to the Calculate button
document.getElementById("calculate-btn").addEventListener("click", () => {
  const bill = parseFloat(document.getElementById("bill").value); // Get the bill amount
  const people = parseInt(document.getElementById("people").value); // Get the number of people

  // Validation: Check if inputs are valid
  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }
  if (isNaN(people) || people <= 0) {
    alert("Please enter a valid number of people.");
    return;
  }
  if (selectedTip === 0) {
    alert("Please select a tip percentage.");
    return;
  }

  // Calculate the tip amount and total per person
  const tipAmount = (bill * selectedTip) / 100 / people;
  const totalBill = (bill + bill * (selectedTip / 100)) / people;

  // Update the UI with calculated values
  document.getElementById("tip-amount").textContent = tipAmount.toFixed(2);
  document.getElementById("total-bill").textContent = totalBill.toFixed(2);
});

// Add functionality to the Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tip-amount").textContent = "0.00";
  document.getElementById("total-bill").textContent = "0.00";

  // Reset the selected tip
  selectedTip = 0;
  document.querySelectorAll(".tip-btn").forEach((btn) => btn.classList.remove("active"));
});
