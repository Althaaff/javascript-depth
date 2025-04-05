// dynamically filter a list based on user input :

const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 29.99 },
  { id: 2, name: "Gaming Keyboard", category: "Electronics", price: 59.99 },
  { id: 3, name: "Office Chair", category: "Furniture", price: 129.99 },
  { id: 4, name: "USB Cable", category: "Electronics", price: 9.99 },
  { id: 5, name: "Desk Lamp", category: "Furniture", price: 34.99 },
];

const filterItems = (searchTerm, items = products) => {
  if (!searchTerm || searchTerm.trim() === "") {
    return items;
  }

  const term = searchTerm.toLowerCase();

  // returns items based on user search term :
  return items.filter((item) => {
    return (
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.price.toString().includes(term)
    );
  });
};

// setup search filter :
const setupSearchFilter = () => {
  const searchInput = document.getElementById("searchInput");

  if (!searchInput) {
    console.log("search input is empty..");
  }

  searchInput.addEventListener("input", (e) => {
    const filteredItems = filterItems(e.target.value);

    console.log("search", filteredItems);

    displayResults(filteredItems);
  });
};

// show the filtered items :
const displayResults = (items) => {
  console.log("items", items);
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // clear previous results

  if (items.length === 0) {
    resultsContainer.innerText = "Item not found!";
    return;
  }

  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.category}</p>
      <span>${item.price}</span>
    `;

    resultsContainer.appendChild(itemElement);
  });
};

document.addEventListener("DOMContentLoaded", setupSearchFilter);
