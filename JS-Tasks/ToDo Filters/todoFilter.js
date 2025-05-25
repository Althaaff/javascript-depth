document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const error = document.getElementById("error");
  const taskList = document.getElementById("taskList");
  const filterButtons = document.querySelectorAll(".filter");

  let tasks = loadTasks();
  let filter = "all";

  function addTask(text) {
    text = text.trim();
    if (!text) {
      showError("Task cannot be empty");
      return;
    }
    if (tasks.some((task) => task.text.toLowerCase() === text.toLowerCase())) {
      showError("Task already exists");
      return;
    }

    const task = {
      id: Date.now(),
      text,
      completed: false,
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
    error.classList.add("hidden");
  }

  function toggleTask(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }

  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
  }

  function getFilteredTasks() {
    if (filter === "done") return tasks.filter((task) => task.completed);
    if (filter === "active") return tasks.filter((task) => !task.completed);
    return tasks;
  }

  function renderTasks() {
    taskList.innerHTML = "";
    const filteredTasks = getFilteredTasks();
    filteredTasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = `task-item ${task.completed ? "completed" : ""}`;
      li.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.text}</span>
        <button class="delete-button">Delete</button>
      `;
      const checkbox = li.querySelector("input");
      const deleteButton = li.querySelector("button");
      checkbox.addEventListener("change", () => toggleTask(task.id));
      deleteButton.addEventListener("click", () => deleteTask(task.id));
      taskList.appendChild(li);
    });
    updateFilterButtons();
  }

  function updateFilterButtons() {
    filterButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === filter);
    });
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
  }

  function saveTasks() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  function loadTasks() {
    if (typeof window !== "undefined" && window.localStorage) {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  }

  addButton.addEventListener("click", () => {
    addTask(taskInput.value);
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filter = button.dataset.filter;
      renderTasks();
    });
  });

  renderTasks();
});
