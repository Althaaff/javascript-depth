const btn = document.getElementById("btn");
console.log(btn);
const body = document.querySelector("body");
console.log(body);
const value = document.querySelector(".hexValue");

console.log("value", value);

btn.addEventListener("click", changeHex);

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, "A", "B", "C", "D", "E", "f"];

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    console.log("index", index);

    hex += hexValues[index];

    console.log(hexValues[index]);
  }

  console.log("generated Hex", hex);

  value.textContent = hex;
  body.style.backgroundColor = hex;
}
