const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");

    toggleButton.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark");

    toggleButton.textContent = "Switch to Dark Mode";
  }

  // save theme on local storage :
  localStorage.setItem("theme", theme);
}

// check for saved theme on localStorage on page load :
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";

  setTheme(savedTheme);
});

// toggle theme on button click :
toggleButton.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  setTheme(newTheme);
});
