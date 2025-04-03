function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input, textarea, select");
  const isValid = true;
  let errors = [];

  inputs.forEach((input) => {
    if (input.hasAttribute("required") && input.value.trim() === "") {
      isValid = false;
      errors.push(`${input.name || input.id} is required`);
      input.style.border = "2px solid red";
    } else {
      input.style.border = "1px solid #ccc";
    }
  });

  if (!isValid) {
    alert("Please fill all required fields:\n" + errors.join("\n"));
  }

  return isValid;
}

// call this function on form submission :
document.getElementById("myForm").addEventListener("submit", (e) => {
  if (!validateForm("myForm")) {
    e.preventDefault(); // Prevent form submission if invalid
  }
});
