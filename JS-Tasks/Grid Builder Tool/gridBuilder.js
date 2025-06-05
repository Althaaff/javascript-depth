document.addEventListener("DOMContentLoaded", () => {
  const rowsInput = document.getElementById("rowsInput");
  const colsInput = document.getElementById("columnInput");
  const buildButton = document.getElementById("buildButton");
  const resetButton = document.getElementById("resetButton");
  const error = document.getElementById("error");
  const gridContainer = document.getElementById("grid-container");

  function validateInputs(rows, cols) {
    const rowsNum = parseInt(rows);
    const colsNum = parseInt(cols);

    if (isNaN(rowsNum) || isNaN(colsNum)) {
      return "Rows and columns must be numbers!";
    }

    if (rowsNum < 1 || colsNum < 1) {
      return "Rows and Columns must be atleast 1!";
    }

    if (rowsNum > 50 || colsNum > 50) {
      return "Rows and columns cannot exceed 50";
    }

    return { rows: rowsNum, cols: colsNum };
  }

  function buildTable(rows, cols) {
    const table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
      const tr = document.createElement("tr");

      for (let i = 0; i < cols; i++) {
        const td = document.createElement("td");

        td.addEventListener("click", toggleCell);
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }

    return table;
  }

  function toggleCell(e) {
    e.target.classList.toggle("active");
  }

  function renderTable(rows, cols) {
    gridContainer.innerHTML = "";
    const validation = validateInputs(rows, cols);

    if (typeof validation === "string") {
      showError(validation);
      return;
    }

    const { rows: validRows, cols: validCols } = validation;

    const table = buildTable(validRows, validCols);

    gridContainer.appendChild(table);
    error.classList.add("hidden");
  }

  function resetTable() {
    gridContainer.innerHTML = "";
    rowsInput.value = "";
    colsInput.value = "";
    error.classList.add("hidden");
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
  }

  buildButton.addEventListener("click", (e) => {
    e.preventDefault();

    renderTable(rowsInput.value, colsInput.value);
  });

  resetButton.addEventListener("click", resetTable);

  [rowsInput, colsInput].forEach((input) => {
    console.log("input", input);
    input.addEventListener("keypress", (e) => {
      e.preventDefault();
      if (e.key === "Enter") {
        renderTable(rowsInput.value, colsInput.value);
      }
    });
  });
});
