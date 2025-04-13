const input = document.getElementById("input");
const mirrorText = document.getElementById("inputText");

input.addEventListener("input", showMirrorText);

function showMirrorText() {
  const text = input.value;

  mirrorText.value = text;
}
