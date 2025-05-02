const textInput = document.getElementById("textInput");
const copyButton = document.getElementById("copyButton");
const feedBack = document.getElementById("feedback");

async function copyToClipBoard(text) {
  // vaidate input :
  if (!text.trim()) {
    showFeedBack("error", "No Text To Copy!");
    return false;
  }

  // modern clipboard Api:
  try {
    console.log("runs!");
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      showFeedBack("success", "Text Copied To Clipboard!");
      return true;
    } else {
      // fallback for older browsers :
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showFeedBack("success", "Text Copied To Clipboard!");
      return true;
    }
  } catch (error) {
    showFeedBack("error", "failed to copy!");
    return false;
  }
}

function showFeedBack(type, message) {
  feedBack.textContent = message;
  feedBack.className = type;
  feedBack.classList.remove("hidden");

  setTimeout(() => {
    feedBack.classList.add("hidden");
  }, 2000);
}

copyButton.addEventListener("click", async () => {
  const text = textInput.value;
  await copyToClipBoard(text);
});

textInput.addEventListener("keydown", async (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    const text = textInput.value;
    await copyToClipBoard(text);
  }
});
