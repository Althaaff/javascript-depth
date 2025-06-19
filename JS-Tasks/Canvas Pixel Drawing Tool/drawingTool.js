document.addEventListener("DOMContentLoaded", () => {
  const colorPickerInput = document.getElementById("colorPicker");
  const brushSizeSelect = document.getElementById("brushSize");
  const eraseButton = document.getElementById("eraseButton");
  const clearButton = document.getElementById("clearButton");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let GRID_SIZE = 32;
  let PIXEL_SIZE = 10;

  const state = {
    grid: Array(GRID_SIZE)
      .fill()
      .map(() => Array(GRID_SIZE).fill(null)),

    color: "#000000",
    brushSize: 1,
    isEraser: false,
    isDrawing: false,
  };
  // console.log("grid state", state.grid);
  console.log(state);

  function initCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
    renderGridLines();
  }

  function renderGridLines() {
    ctx.strokeStyle = "rgba(0, 0,0.1)"; // rgba(0, 0,0.1)
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * GRID_SIZE, 0);
      ctx.lineTo(i * GRID_SIZE, canvas.height);
      ctx.stroke();
      ctx.moveTo(0, i * PIXEL_SIZE);
      ctx.lineTo(canvas.width, i * PIXEL_SIZE);
      ctx.stroke();
    }
  }

  function getGridCoords(x, y) {
    const rect = canvas.getBoundingClientRect();

    return {
      x: Math.floor((x - rect.left) / PIXEL_SIZE),
      y: Math.floor((y - rect.top) / PIXEL_SIZE),
    };
  }

  function isValidCoord(x, y) {
    return x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE;
  }

  function drawPixel(x, y) {
    console.log(x, y);
    if (!isValidCoord(x, y)) return;

    const color = state.isEraser ? null : state.color;
    console.log("color", color);

    state.grid[y][y] = color;
    ctx.fillStyle = color || "white";
    ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
    renderGridLines(); // Redraw grid lines over pixel
  }

  function applyBrush(x, y) {
    const size = parseInt(state.brushSize);
    const offset = Math.floor(size / 2);
    // console.log("offset", offset);

    for (let i = -offset; i <= offset; i++) {
      for (let j = -offset; j <= offset; j++) {
        drawPixel(x + i, y + j);
      }
    }
  }

  function renderCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (state.grid[y][x]) {
          ctx.fillStyle = state.grid[y][x];
          ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        }
      }
    }

    renderGridLines();
  }

  function clearGrid() {
    state.grid = Array(GRID_SIZE)
      .fill()
      .map(() => Array(GRID_SIZE).fill(null));

    renderCanvas();
  }

  function handleDraw(e) {
    e.preventDefault();
    const { clientX, clientY } = e.type.startsWith("touch") ? e.touches[0] : e;
    // console.log("client", clientX, clientY);

    const { x, y } = getGridCoords(clientX, clientY);

    applyBrush(x, y);
  }

  canvas.addEventListener("mousedown", (e) => {
    state.isDrawing = true;
    handleDraw(e);
  });

  canvas.addEventListener("mousemove", (e) => {
    if (state.isDrawing) handleDraw(e);
  });

  canvas.addEventListener("mouseup", () => {
    state.isDrawing = false;
  });

  canvas.addEventListener("mouseleave", () => {
    state.isDrawing = false;
  });

  canvas.addEventListener("touchstart", (e) => {
    state.isDrawing = true;
    handleDraw(e);
  });

  canvas.addEventListener("touchmove", (e) => {
    if (state.isDrawing) handleDraw(e);
  });

  canvas.addEventListener("touchend", () => {
    state.isDrawing = false;
  });

  colorPickerInput.addEventListener("input", (e) => {
    state.color = e.target.value;
    state.isEraser = false;
    eraseButton.classList.remove("active");
  });

  brushSizeSelect.addEventListener("change", (e) => {
    state.brushSize = e.target.value;
  });

  eraseButton.addEventListener("click", () => {
    state.isEraser = !state.isEraser;

    eraseButton.classList.toggle("active", state.isEraser);
  });

  clearButton.addEventListener("click", clearGrid);

  initCanvas();
});
