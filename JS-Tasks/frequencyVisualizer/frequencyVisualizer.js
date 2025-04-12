const inputText = document.getElementById("inputText");
const frequencyDisplay = document.getElementById("frequency");

inputText.addEventListener("input", showFrequency);

function showFrequency() {
  let text = inputText.value;
  let freqMap = {};
  let hasValidChar = false;

  for (let char of text) {
    if (char.match(/[a-z0-9]/)) {
      freqMap[char] = (freqMap[char] || 0) + 1;

      hasValidChar = true;
    }
  }

  if (!hasValidChar) {
    console.log("true or false", hasValidChar);
    const error = document.createElement("span");

    error.textContent = "Please Enter characters and numbers!";

    frequencyDisplay.appendChild(error);
  }

  frequencyDisplay.innerHTML = "";

  // Display each character and its frequency :
  for (let char in freqMap) {
    let count = freqMap[char];

    let item = document.createElement("div");
    item.className = "frequency-item";

    item.innerHTML = `
     <span class="char">${char}</span>
      <div class="bar" style="width: ${count * 20}px;"></div>
      <span>(${count})</span>
    `;

    frequencyDisplay.appendChild(item);
  }
}
