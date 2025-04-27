const resizable = document.getElementById("resizable");
const sizeDisplay = document.getElementById("sizeDisplay");
const handles = document.querySelectorAll(".handle");

let isResizing = false;
let currentHandle = null;
let startX, startY, startWidth, startHeight, startLeft, startTop;
const minSize = 50;

handles.forEach((handle) => {
  handle.addEventListener("mousedown", startResize);
});

function startResize(e) {
  e.preventDefault();
  isResizing = true;
  currentHandle = e.target.dataset.handle;
  console.log("currentHandle", currentHandle);

  // store initial state :
  startX = e.clientX;
  startY = e.clientY;
  startWidth = resizable.offsetWidth;
  startHeight = resizable.offsetHeight;
  startLeft = resizable.offsetLeft;
  startTop = resizable.offsetTop;

  // add global listeners :
  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
}

function resize(e) {
  if (!isResizing) {
    return;
  }

  let newWidth = startWidth;
  let newHeight = startHeight;
  let newLeft = startLeft;
  let newTop = startTop;

  // calculate the new dimensions based on handle :
  if (currentHandle.includes("top-right")) {
    newWidth = startWidth + (e.clientX - startX);
  }
  if (currentHandle.includes("bottom-left")) {
    newHeight = startHeight + (e.clientY - startY);
  }
  if (currentHandle.includes("top-left")) {
    newWidth = startWidth - (e.clientX - startX);
    newLeft = startLeft + (e.clientX - startX);
  }
  if (currentHandle.includes("top")) {
    newHeight = startHeight - (e.clientY - startY);
    newTop = startTop + (e.clientY - startY);
  }

  // minimum size :
  newWidth = Math.max(minSize, newWidth);
  newHeight = Math.max(minSize, newHeight);

  // update div size and position :
  resizable.style.width = `${newWidth}px`;
  resizable.style.height = `${newHeight}px`;
  resizable.style.left = `${newLeft}px`;
  resizable.style.top = `${newTop}px`;

  // update the size display :
  sizeDisplay.textContent = `${Math.round(newWidth)} X ${Math.round(
    newHeight
  )}`;
}

function stopResize(e) {
  isResizing = false;
  currentHandle = null;

  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
}

// prevent text selection during resize :
document.addEventListener("selectstart", (e) => {
  if (isResizing) e.preventDefault();
});
