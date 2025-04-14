function replaceEmoji(text) {
  const emojiMap = {
    ":smile:": "😊",
    ":heart:": "❤️",
    ":thumbsup:": "👍",
  };

  // Replace all matches using regex
  return text.replace(/:smile:/g, emojiMap[":heart:"]);
}

const text = "Hello Lets :smile: today";
const result = replaceEmoji(text);

console.log(result);

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".emoji-text");

  elements.forEach((ele) => {
    ele.textContent = replaceEmoji(ele.textContent);
  });
});
