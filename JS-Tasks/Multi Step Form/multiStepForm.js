const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressBar");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const errorElement = document.getElementById("error");
const reviewData = document.getElementById("reviewData");
const resultElement = document.getElementById("results");
const finalData = document.getElementById("finalData");
const resetButton = document.getElementById("resetButton");

console.log(nextButton, prevButton);

let currentStep = 0;
const formData = {};

function renderSteps() {
  // show current step and hide others :
  steps.forEach((step, index) => {
    step.classList.toggle("hidden", index !== currentStep);
  });

  // update progress bar :
  const progress = ((currentStep + 1) / steps.length) * 100;
  progressBar.style.width = `${progress}%`;

  // show / hide buttons :
  prevButton.classList.toggle("hidden", currentStep === 0);
  nextButton.classList.toggle("hidden", currentStep === steps.length - 1);
  submitButton.classList.toggle("hidden", currentStep !== steps.length - 1);
  errorElement.classList.add("hidden");

  // show review data on last step :
  if (currentStep === steps.length - 1) {
    reviewData.innerHTML = `
      <p><strong>Name:</strong> ${formData.name || ""}</p>
      <p><strong>Age:</strong> ${formData.age || ""}</p>
      <p><strong>Email:</strong> ${formData.email || ""}</p>
      <p><strong>Phone:</strong> ${formData.phone || ""}</p>
    `;
  }
}

function validateSteps() {
  const currentInputs = steps[currentStep].querySelectorAll("input");

  for (const input of currentInputs) {
    if (!input.value.trim()) {
      errorElement.textContent = `Please Fill ${input.name}!`;
      errorElement.classList.remove("hidden");

      return false;
    }

    // if both true then show below error message :
    if (input.type === "email" && !/^\S+@\S+\.\S+$/.test(input.value)) {
      errorElement.textContent = "Please enter a valid email.";
      errorElement.classList.remove("hidden");

      return false;
    }
  }

  return true;
}

// collect form data :
function collectData() {
  const currentInputs = steps[currentStep].querySelectorAll("input");

  currentInputs.forEach((input) => {
    formData[input.name] = input.value.trim();
  });
}

// next button :
nextButton.addEventListener("click", () => {
  console.log("clicked");
  if (validateSteps()) {
    collectData();
    currentStep++;
    renderSteps();
  }
});

// prev button :
prevButton.addEventListener("click", () => {
  console.log("clicked");
  currentStep--;
  renderSteps();
});

// submit form :
submitButton.addEventListener("click", () => {
  console.log("clicked");
  if (validateSteps()) {
    collectData();
    resultElement.classList.remove("hidden");
    steps[currentStep].classList.add("hidden");
    nextButton.classList.add("hidden");
    submitButton.classList.add("hidden");
    prevButton.classList.add("hidden");
    finalData.innerHTML = `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Age:</strong> ${formData.age}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
    `;
  }
});

resetButton.addEventListener("click", () => {
  currentStep = 0;
  Object.keys(formData).forEach((key) => delete formData[key]);
  resultElement.classList.add("hidden");
  steps.forEach((step) =>
    step.querySelectorAll("input").forEach((input) => (input.value = ""))
  );
  renderSteps();
});

// initialize step :
renderSteps();
