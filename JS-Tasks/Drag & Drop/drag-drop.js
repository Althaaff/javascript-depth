// Data structure to manage state
class DragDropManager {
  constructor() {
    // State: { containerId: [{ id, content }, ...] }
    this.state = {
      1: [
        { id: "1", content: "Item 1" },
        { id: "2", content: "Item 2" },
      ],
      2: [
        { id: "3", content: "Item 3" },
        { id: "4", content: "Item 4" },
      ],
    };

    // Map to associate DOM elements with IDs
    this.elementMap = new Map();

    // Initialize DOM and event listeners
    this.init();
  }

  // Initialize containers and items
  init() {
    this.render();
    this.setupEventListeners();
  }

  // Render all containers based on state
  render() {
    console.log("rendered!");
    const containers = document.querySelectorAll(".container");
    this.elementMap.clear();

    containers.forEach((container) => {
      const containerId = container.dataset.containerId;
      console.log("containedId", containerId);
      container.innerHTML = ""; // Clear existing content

      const items = this.state[containerId] || [];

      console.log("items :", items);
      items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.dataset.id = item.id;
        itemElement.textContent = item.content;
        itemElement.draggable = true;
        container.appendChild(itemElement);
        this.elementMap.set(item.id, itemElement);
      });
    });
  }

  // Set up drag-and-drop event listeners
  setupEventListeners() {
    document.addEventListener("dragstart", this.handleDragStart.bind(this));
    document.addEventListener("dragover", this.handleDragOver.bind(this));
    document.addEventListener("dragenter", this.handleDragEnter.bind(this));
    document.addEventListener("dragleave", this.handleDragLeave.bind(this));
    document.addEventListener("drop", this.handleDrop.bind(this));
    document.addEventListener("dragend", this.handleDragEnd.bind(this));
  }

  // Handle drag start
  handleDragStart(event) {
    console.log("event", event);
    const item = event.target.closest(".item");
    console.log("item", item);
    // console.log("started");
    if (!item) return;

    event.dataTransfer.setData("text/plain", item.dataset.id);
    item.classList.add("dragging");

    // Optional: Set drag image for better UX
    event.dataTransfer.setDragImage(item, 0, 0);
  }

  // Allow dropping by preventing default
  handleDragOver(event) {
    console.log("over");
    event.preventDefault();
  }

  // Highlight drop target
  handleDragEnter(event) {
    // console.log("drag entered");
    const container = event.target.closest(".container");
    if (container) {
      container.classList.add("drag-over");
    }
  }

  // Remove highlight from drop target
  handleDragLeave(event) {
    // console.log("leaved");
    const container = event.target.closest(".container");
    // console.log("drag leave", container);
    if (container) {
      container.classList.remove("drag-over");
    }
  }

  // Handle drop
  handleDrop(event) {
    // console.log("dropped");
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    console.log("item id", itemId);
    const targetContainer = event.target.closest(".container");
    const targetItem = event.target.closest(".item");

    if (!targetContainer || !itemId) return;

    const sourceContainerId = this.findContainerIdByItemId(itemId);
    const targetContainerId = targetContainer.dataset.containerId;

    if (!sourceContainerId || !targetContainerId) return;

    // Find source and target items
    const sourceItems = this.state[sourceContainerId];
    const targetItems = this.state[targetContainerId];
    const draggedItem = sourceItems.find((item) => item.id === itemId);

    if (!draggedItem) return;

    // Remove from source
    this.state[sourceContainerId] = sourceItems.filter(
      (item) => item.id !== itemId
    );

    // Insert into target
    if (targetItem) {
      // Reorder within same container or move to specific position
      const targetItemId = targetItem.dataset.id;
      const targetIndex = targetItems.findIndex(
        (item) => item.id === targetItemId
      );
      targetItems.splice(targetIndex, 0, draggedItem);
    } else {
      // Append to end of target container
      targetItems.push(draggedItem);
    }

    // Re-render DOM
    this.render();
  }

  // Clean up after drag
  handleDragEnd(event) {
    const item = event.target.closest(".item");
    if (item) {
      item.classList.remove("dragging");
    }
    document.querySelectorAll(".container").forEach((container) => {
      container.classList.remove("drag-over");
    });
  }

  // Helper: Find container ID by item ID
  findContainerIdByItemId(itemId) {
    console.log("item Id", itemId);
    for (const [containerId, items] of Object.entries(this.state)) {
      if (items.some((item) => item.id === itemId)) {
        return containerId;
      }
    }
    return null;
  }
}

const dragDrop = new DragDropManager();
