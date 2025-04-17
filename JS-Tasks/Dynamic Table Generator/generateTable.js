const form = document.getElementById("tableForm");
const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const tableContainer = document.querySelector(".tableContainer");

console.log(form, rowsInput, colsInput, tableContainer);

form.addEventListener("submit", generateTable);

function generateTable(e) {
  console.log("called!");
  e.preventDefault();
  // convert to number :
  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);

  console.log(rows);
  console.log(cols);

  if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
    alert("Please enter valid positive numbers for rows and columns!");

    return;
  }

  // clear previous table :
  tableContainer.innerHTML = "";

  // create table :
  const table = document.createElement("table");

  // generate rows and cols cell :
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");

      cell.textContent = `R${i + 1}|C${j + 1}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
