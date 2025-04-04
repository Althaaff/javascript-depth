function toggleTheme(btn) {
  document.body.classList.toggle("dark-mode");

  // const toggleBtn = document.getElementById(id)

  // save preference :
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    btn.innerText = "🌞";
  } else {
    localStorage.setItem("theme", "light");
    btn.innerText = "🌙";
  }
}

// apply saved theme onload :
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").innerText = "🌙";
  const savedTheme = localStorage.getItem("theme");

  console.log(savedTheme);

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
