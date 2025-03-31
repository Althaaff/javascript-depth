function createTable(data, containerId, stripeColor = "red") {
  if (!data) return;

  const table = document.createElement("table");
  table.border = "1";

  // table header creating dynamically :
  const headers = Object.keys(data[0]); // access the object key (not value)
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header.toUpperCase();

    headerRow.appendChild(th);
  });

  // after loop append the headerRow to table head :
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // create table body :
  const tbody = document.createElement("tbody");

  data.forEach((item, index) => {
    console.log("item :", item);
    const row = document.createElement("tr");

    headers.forEach((key) => {
      const tdata = document.createElement("td");
      tdata.textContent = item[key];

      row.appendChild(tdata);
    });

    // apply zebra-stripe styling dynamically :
    if (index % 2 === 0) {
      row.style.backgroundColor = stripeColor;
      row.style.color = "black";
    } else {
      row.style.backgroundColor = "#ffffff";
    }

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  const container = document.getElementById(containerId);
  container.innerHTML = "";
  container.appendChild(table);
}

// Function to update zebra-striping dynamically :
function updateZibraColor() {
  const color = document.getElementById("stripeColor").value;
  // call createTable function :
  createTable(users, "container", color);
}

// sample data :
const users = [
  { name: "muhammad althaf", age: 20, city: "Manglore" },
  { name: "Alex", age: 30, city: "Los Angeles" },
  { name: "Sinan", age: 23, city: "banglore" },
];

console.log(createTable(users, "container"));
