const grid = document.getElementById("grid");
const clearButton = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");

console.log(grid, clearButton, colorPicker);

let isPainting = false;
let gridSize = 16;

function createGrid() {
  grid.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mousedown", startPaint);
    cell.addEventListener("mouseover", paintCell);
    cell.addEventListener("mouseup", stopPaint);

    grid.appendChild(cell);
  }
}

// start paint :
function startPaint(e) {
  e.preventDefault();
  isPainting = true;

  paintCell(e);
}

// paint cell :
function paintCell(e) {
  if (isPainting) {
    e.target.style.backgroundColor = colorPicker.value;
  }
}
// stop paint :
function stopPaint() {
  isPainting = false;
}

function clearGrid() {
  document.querySelectorAll(".cell").forEach((cell) => {
    // console.log(cell);
    cell.style.backgroundColor = "white";
  });
}

// prevent default drag behaviour :
grid.addEventListener("dragstart", (e) => e.preventDefault());

// handle mouseup outside grid :
document.addEventListener("mouseup", stopPaint);

colorPicker.addEventListener("input", () => {
  // update active color (no action needed, colorPicker.value is used directly above)
});

// clear grid paint:
clearButton.addEventListener("click", clearGrid);

// intialize :
createGrid();
