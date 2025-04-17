const form = document.getElementById("loanForm");
const amountInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const yearsInput = document.getElementById("years");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const monthlyDisplay = document.getElementById("monthly");
const totalDisplay = document.getElementById("total");
const interestTotalDisplay = document.getElementById("interestTotal");
const error = document.getElementById("error");

form.addEventListener("submit", calculateLoan);

function calculateLoan(e) {
  e.preventDefault();

  // Get and validate inputs :
  let principal = parseFloat(amountInput.value);
  let annualRate = parseFloat(interestInput.value);
  let years = parseInt(yearsInput.value);

  if (
    isNaN(principal) ||
    isNaN(annualRate) ||
    isNaN(years) ||
    principal < 0 ||
    annualRate <= 0 ||
    years < 0
  ) {
    showError("Please enter valid positive numbers.");
    return;
  }

  // show loading :
  showLoading();

  // small dlay calculation display for better UX :
  setTimeout(() => {
    const monthlyRate = annualRate / 100 / 12;
    console.log("monthlyRate", annualRate);
    const months = years * 12;
    let monthlyPayment;

    if (monthlyRate === 0) {
      monthlyPayment = principal / months;
    } else {
      const factor = Math.pow(1 + monthlyRate, months);
      console.log("factor", factor);
      monthlyPayment = (principal * (monthlyRate * factor)) / (factor - 1);
      console.log("monthlyPayment", monthlyPayment);
    }

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    // display result :
    monthlyDisplay.textContent = monthlyPayment.toFixed(2);
    totalDisplay.textContent = totalPayment.toFixed(2);
    interestTotalDisplay.textContent = totalInterest.toFixed(2);
    showResult();
  }, 1000);

  function showLoading() {
    loading.classList.remove("hidden");
    results.classList.add("hidden");
    error.classList.add("hidden");
  }

  function showResult() {
    loading.classList.add("hidden");
    results.classList.remove("hidden");
    error.classList.add("hidden");
  }

  function showError(message) {
    loading.classList.add("hidden");
    results.classList.add("hidden");
    error.classList.remove("hidden");
    error.textContent = message;
  }
}

// intial render :
calculateLoan();
