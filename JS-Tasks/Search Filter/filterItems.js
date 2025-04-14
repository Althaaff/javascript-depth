let searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const items = document.querySelectorAll("li");
const container = document.querySelector(".container");

console.log(searchInput);
console.log(itemList);
console.log(items);

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    console.log("args", ...args);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function filterItems(query) {
  console.log("query", query);
  const searchTerm = query.toLowerCase();
  let matchFound = false;

  let errorMessage = document.querySelector(".error-message");

  if (errorMessage) {
    errorMessage.remove();
  }

  Array.from(items).forEach((item) => {
    console.log("items", items);
    let text = item.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      matchFound = true;
    }

    item.classList.toggle("hidden", !text.includes(searchTerm));
  });

  if (!matchFound) {
    let error = document.createElement("span");
    error.textContent = "No Match Found!";
    error.className = "error-message";
    container.appendChild(error);
  }
}

const deboucedFilter = debounce(filterItems, 300);

searchInput.addEventListener("input", () => {
  console.log("changing");
  deboucedFilter(searchInput.value);
});
