const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const error = document.getElementById("error");
const taskList = document.getElementById("taskList");

let tasks = loadTasks();

console.log(tasks);

console.log(localStorage);

function addTask(text) {
  // Validate input
  text = text.trim();
  if (!text) {
    showError("Task cannot be empty");
    return;
  }
  if (tasks.some((task) => task.text.toLowerCase() === text.toLowerCase())) {
    showError("Task already exists");
    return;
  }

  // Add task
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

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
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
}

function showError(message) {
  error.textContent = message;
  error.classList.remove("hidden");
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  console.log("saved", saved);
  return saved ? JSON.parse(saved) : [];
}

addButton.addEventListener("click", () => {
  addTask(taskInput.value);
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(taskInput.value);
  }
});

// Initialize
renderTasks();
