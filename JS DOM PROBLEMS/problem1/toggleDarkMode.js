function myFunction() {
  const x = document.getElementById("myDiv");

  if (x.style.display === "none") {
    console.log("toggled!");
    x.style.display = "block";
  } else {
    console.log("toggled!");
    x.style.display = "none";
  }
}
