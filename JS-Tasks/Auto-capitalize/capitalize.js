let inputText = document.getElementById("inputText");

inputText.addEventListener("input", autoCapitalize);

function autoCapitalize() {
  const cursorPos = inputText.selectionStart;
  console.log("cursor", cursorPos);

  let text = inputText.value;

  // Split text into sentences based on period, question mark, or exclamation mark :
  const sentences = text.split(/([.!?]\s*)/).filter((s) => s.length > 0);

  console.log("sentence", sentences);

  // Capitalize first letter of each sentence :

  let result = "";
  let capitalizeNext = true;

  for (let part of sentences) {
    console.log("part", part);
    if (capitalizeNext && part.match(/[a-zA-Z]/)) {
      result += part.charAt(0).toUpperCase() + part.slice(1);
      capitalizeNext = false;
    } else {
      result += part;
    }

    if (part.match(/[.!?]/)) capitalizeNext = true;
  }

  // update text area value :
  inputText.value = result;

  // Restore cursor position (adjust for changes) :

  inputText.setSelectionRange(cursorPos, cursorPos);
}
