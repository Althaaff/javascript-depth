document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("validationForm");
  const submitButton = document.getElementById("submitButton");
  const success = document.getElementById("suceess");

  const validationRules = {
    email: {
      required: true,
      validate: (value) => ({
        isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        error: "Invalid email format",
      }),
    },

    phone: {
      required: true,
      validate: (value) => ({
        isValid: /^\+?\d{10,15}$/.test(value.replace(/[\s-()]/g, "")),
        error: "Invalid phone number (e.g., +1234567890)",
      }),
    },

    password: {
      required: true,
      validate: (value) => ({
        isValid:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          ),
        error:
          "Password must be 8+ characters with uppercase, lowercase, number, and special character",
      }),
    },

    confirmPassword: {
      required: true,
      validate: (value, formData) => {
        let password = formData.get("password");
        console.log(password);

        const isValid = password === value;

        return {
          isValid,
          error: isValid ? "" : "Password do not match..",
        };
      },
    },
  };

  function validateField(field) {
    const value = field.value.trim();
    const rule = validationRules[field.id];

    if (!value && rule.required) {
      return {
        isValid: false,
        error: field.id.charAt(0).toUpperCase() + field.id.slice(1),
      };
    }

    return rule.validate(value, new FormData(form));
  }

  function renderFieldState(field) {
    const errorElement = document.getElementById(`${field.id}Error`);
    console.log(errorElement);
    const { isValid, error } = validateField(field);

    errorElement.textContent = `${isValid ? "" : error}`;
    field.classList.toggle("valid", isValid && field.value.trim());
    field.classList.toggle("invalid", !isValid && field.value.trim());
    field.setAttribute("aria-invalid", !isValid && field.value.trim());

    updateSubmitButton();
  }

  function validateForm() {
    let isValid = true;

    Object.keys(validationRules).forEach((fieldId) => {
      const field = document.getElementById(fieldId);

      const result = validateField(field);

      if (!result.isValid) {
        isValid = false;
      }
      renderFieldState(field);
    });

    console.log("is valid ?", isValid);

    return isValid;
  }

  function updateSubmitButton() {
    const allValid = Object.keys(validationRules).every((fieldId) => {
      const field = document.getElementById(fieldId);

      return validateField(field).isValid;
    });

    submitButton.disabled = !allValid; // if all valid is true then button should be enabled otherwise disabled //
  }

  function renderSuccess() {
    success.textContent = "Form submitted successfully..";
    success.classList.remove("hidden");
    form.reset();

    Object.keys(validationRules).forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      field.classList.remove("valid", "invalid");
      document.getElementById(`${fieldId}Error`).textContent = "";
    });

    submitButton.disabled = true;

    setTimeout(() => {
      success.textContent = "";
      success.classList.add("hidden");
    }, 3000);
  }

  form.querySelectorAll("input").forEach((field) => {
    field.addEventListener("input", () => renderFieldState(field));
    field.addEventListener("paste", () =>
      setTimeout(() => renderFieldState(field), 1)
    );
  });

  form.addEventListener("submit", (e) => {
    console.log("clicked");
    e.preventDefault();
    if (validateForm()) {
      console.log("validation done!");
      renderSuccess();
    }
  });
});
