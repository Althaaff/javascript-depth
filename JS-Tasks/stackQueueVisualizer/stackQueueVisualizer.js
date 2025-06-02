document.addEventListener("DOMContentLoaded", () => {
  const elementInput = document.getElementById("elementInput");
  const error = document.getElementById("error");
  const stackContainer = document.getElementById("stack");
  const queueContainer = document.getElementById("queue");
  const pushButton = document.getElementById("pushButton");
  const popButton = document.getElementById("popButton");
  const enqueueButton = document.getElementById("enqueueButton");
  const dequeueButton = document.getElementById("dequeueButton");

  const stack = {
    items: [],
    maxSize: 10,
    push(item) {
      if (this.items.length >= this.maxSize) {
        showError("Stack is full");
        return false;
      }
      this.items.push(item);
      return true;
    },
    pop() {
      if (this.isEmpty()) {
        showError("Stack is empty");
        return null;
      }
      return this.items.pop();
    },
    isEmpty() {
      return this.items.length === 0;
    },
  };

  const queue = {
    items: [],
    maxSize: 10,
    enqueue(item) {
      if (this.items.length >= this.maxSize) {
        showError("Queue is full");
        return false;
      }
      this.items.push(item);
      return true;
    },
    dequeue() {
      if (this.isEmpty()) {
        showError("Queue is empty");
        return null;
      }
      return this.items.shift();
    },
    isEmpty() {
      return this.items.length === 0;
    },
  };

  let context = "queue"; // Track active structure (stack or queue)
  let isProcessing = false; // Prevent rapid clicks

  function validateInput(value) {
    value = value.trim();
    if (!value) {
      showError("Element cannot be empty");
      return false;
    }
    if (value.length > 20) {
      showError("Element too long");
      return false;
    }
    return value;
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
    setTimeout(() => error.classList.add("hidden"), 2000);
  }

  function renderStack() {
    stackContainer.innerHTML = '<div class="label top">Top</div>';
    stack.items.forEach((item) => {
      const element = document.createElement("div");
      element.className = "element";
      element.textContent = item;
      stackContainer.appendChild(element);
    });
  }

  function renderQueue() {
    queueContainer.innerHTML = `
      <div class="label front">Front</div>
      <div class="label rear">Rear</div>
    `;
    queue.items.forEach((item) => {
      const element = document.createElement("div");
      element.className = "element";
      element.textContent = item;
      queueContainer.appendChild(element);
    });
  }

  function animateElement(container, isAdd, structure) {
    if (isProcessing) return;
    isProcessing = true;
    const elements = container.querySelectorAll(".element");
    let target;

    if (isAdd) {
      target = elements[elements.length - 1]; // Last for both (push/enqueue)
    } else {
      target =
        structure === "stack" ? elements[elements.length - 1] : elements[0]; // Last for stack, first for queue
    }

    if (target) {
      target.classList.add(isAdd ? "animate-in" : "animate-out");

      setTimeout(() => {
        target.classList.add("active");
        if (!isAdd) {
          target.remove();
          if (structure === "stack") renderStack();
          else renderQueue();
        }
        isProcessing = false;
      }, 300);

      setTimeout(
        () => target.classList.remove("animate-in", "animate-out", "active"),
        600
      );
    } else {
      isProcessing = false;
    }
  }

  pushButton.addEventListener("click", () => {
    if (isProcessing) return;
    context = "stack";
    const value = validateInput(elementInput.value);
    if (value && stack.push(value)) {
      renderStack();
      animateElement(stackContainer, true, "stack");
      elementInput.value = "";
    }
  });

  popButton.addEventListener("click", () => {
    if (isProcessing) return;
    context = "stack";
    const item = stack.pop();
    if (item !== null) {
      animateElement(stackContainer, false, "stack");
    }
  });

  enqueueButton.addEventListener("click", () => {
    if (isProcessing) return;
    context = "queue";
    const value = validateInput(elementInput.value);
    if (value && queue.enqueue(value)) {
      renderQueue();
      animateElement(queueContainer, true, "queue");
      elementInput.value = "";
    }
  });

  dequeueButton.addEventListener("click", () => {
    if (isProcessing) return;
    context = "queue";
    const item = queue.dequeue();
    if (item !== null) {
      animateElement(queueContainer, false, "queue");
    }
  });

  elementInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !isProcessing) {
      const value = validateInput(elementInput.value);
      if (value) {
        if (context === "stack" && stack.push(value)) {
          renderStack();
          animateElement(stackContainer, true, "stack");
        } else if (context === "queue" && queue.enqueue(value)) {
          renderQueue();
          animateElement(queueContainer, true, "queue");
        }
        elementInput.value = "";
      }
    }
  });

  renderStack();
  renderQueue();
});
