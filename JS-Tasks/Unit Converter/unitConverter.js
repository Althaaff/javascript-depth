const categorySelect = document.getElementById("categorySelect");
const valueInput = document.getElementById("valueInput");
const sourceUnit = document.getElementById("sourceUnit");
const targetUnit = document.getElementById("targetUnit");
const error = document.getElementById("error");
const result = document.getElementById("result");

const units = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    feet: 0.3048,
    inch: 0.0254,
  },
  weight: {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    pound: 0.453592,
    ounce: 0.0283495,
  },
};

function populateUnits() {
  const category = categorySelect.value;
  sourceUnit.innerHTML = "";
  targetUnit.innerHTML = "";

  Object.keys(units[category]).forEach((unit) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = unit;
    option1.textContent = unit;

    option2.value = unit;
    option2.textContent = unit;

    sourceUnit.appendChild(option1);
    targetUnit.appendChild(option2);
  });

  updateResult();
}

// validate input value :
function validateInput(value) {
  if (value === "" || isNaN(value) || value < 0) {
    error.textContent = "Please enter a valid non-negative number";
    error.classList.remove("hidden");
    return false;
  }
  error.classList.add("hidden");
  return true;
}

function convert() {
  const value = parseFloat(valueInput.value);
  if (!validateInput(value)) {
    result.textContent = "";

    return;
  }

  const category = categorySelect.value;
  console.log("category", category);
  const source = sourceUnit.value;
  console.log("source", source);
  const target = targetUnit.value;

  // Convert to base unit, then to target unit :
  const baseValue = value * units[category][source];
  console.log("baseValue", baseValue);
  const convertedBaseValue = baseValue / units[category][target];
  console.log("convertedBaseValue", convertedBaseValue);

  result.textContent = `${value} ${source} = ${convertedBaseValue.toFixed(
    2
  )} ${target}`;
}

function updateResult() {
  convert();
}

categorySelect.addEventListener("change", populateUnits);
sourceUnit.addEventListener("change", updateResult);
targetUnit.addEventListener("change", updateResult);
valueInput.addEventListener("input", updateResult);

// initiallize :
populateUnits();
