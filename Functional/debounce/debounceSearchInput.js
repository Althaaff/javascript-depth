const data = [
  "apple",
  "banana",
  "grape",
  "orange",
  "mango",
  "melon",
  "apricot",
  "pineapple",
];

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function searchSuggestions(query) {
  const suggestionBox = document.querySelector(".suggestions");
  console.log(suggestionBox);
  suggestionBox.innerHTML = "";

  if (!query) return;

  const matches = data.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase())
  );
  console.log(matches);

  matches.forEach((match) => {
    console.log(match);
    const div = document.createElement("div");
    div.textContent = match;

    suggestionBox.appendChild(div);
  });
}

const debouncedSearch = debounce(searchSuggestions, 500);

document.getElementById("inputText").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
