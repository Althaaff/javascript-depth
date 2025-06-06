document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addButton = document.getElementById("addButton");
  const error = document.getElementById("error");
  const itemList = document.getElementById("itemList");
  const clearButton = document.getElementById("clearButton");

  console.log(itemInput, addButton, error, itemList, clearButton);

  let items = loadItems();

  function validateInput(text) {
    text = text.trim();

    if (!text) {
      showError("Item cannot be empty!");
      return;
    }

    return text;
  }

  function addItem(text) {
    const validText = validateInput(text);

    if (!validText) return;

    const item = {
      id: Date.now(),
      text: validText,
    };

    items.push(item);
    saveItems();
    renderItems();
    itemInput.value = "";
  }

  function deleteItem(id) {
    items = items.filter((item) => item.id !== id);
    saveItems();
    renderItems();
  }

  function reOrderItems(dragId, dropId) {
    const dragIndex = items.findIndex((item) => item.id === dragId);
    const dropIndex = items.findIndex((item) => item.id === dropId);

    const [draggedItem] = items.splice(dragIndex, 1);
    items.splice(dropIndex, 0, draggedItem);

    saveItems();
    renderItems();
  }

  function renderItems() {
    itemList.innerHTML = "";

    items.forEach((item) => {
      let li = document.createElement("li");
      li.className = "item";
      li.draggable = true;
      li.dataset.id = item.id;

      li.innerHTML = `
       <span>${item.text}</span>
       <button class="delete-button">Delete</button>
      `;

      li.addEventListener("dragstart", (e) => {
        e.target.classList.add("dragging");
        e.dataTransfer.setData("text/plain", item.id);
      });

      li.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
      });

      li.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      li.addEventListener("drop", (e) => {
        e.preventDefault();

        const dragId = e.dataTransfer.getData("text/plain");
        const dropId = e.target.closest(".item").dataset.id;

        reOrderItems(dragId, dropId);
      });

      li.querySelector(".delete-button").addEventListener("click", () =>
        deleteItem(item.id)
      );

      itemList.appendChild(li);
    });
  }

  function clearItems() {
    items = [];
    saveItems();
    renderItems();
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
    setTimeout(() => error.classList.add("hidden"), 2000);
  }

  function saveItems() {
    if (typeof window !== "undefined" && window.locaStorage) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }

  function loadItems() {
    if (typeof window !== "undefined" && window.localStorage) {
      const saved = localStorage.getItem("items");

      return saved ? JSON.parse(items) : [];
    }

    return [];
  }

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    addItem(itemInput.value);
  });

  itemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem(itemInput.value);
    }
  });

  clearButton.addEventListener("click", clearItems);

  renderItems();
});
