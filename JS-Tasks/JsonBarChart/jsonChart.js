document.addEventListener("DOMContentLoaded", () => {
  const jsonInput = document.getElementById("jsonInput");
  const fileInput = document.getElementById("fileInput");
  const renderButton = document.getElementById("renderButton");
  const error = document.getElementById("error");
  const chart = document.getElementById("chart");

  console.log(jsonInput, fileInput, renderButton, error, chart);

  let data = [];

  function validateJson(json) {
    if (!Array.isArray(json) || json.length === 0 || json.length > 20) {
      return "Invalid JSON: Must be a non-empty array with ≤20 items";
    }

    for (const item of json) {
      if (
        !item.label ||
        typeof item.label !== "string" ||
        !item.value ||
        typeof item.value !== "number" ||
        item.value < 0
      ) {
        return "Invalid JSON: Each item must have a string label and a non-negative number value";
      }

      return null;
    }
  }

  function parseJson(input) {
    try {
      const json = JSON.parse(input);
      const errorMsg = validateJson(json);
      if (errorMsg) {
        showError(errorMsg);
        return false;
      }
      data = json;
      return true;
    } catch (e) {
      showError("Invalid JSON format");
      return false;
    }
  }

  function scaleValue(value, maxValue, chartHeight) {
    return (value / maxValue) * chartHeight;
  }

  function getTicks(maxValue) {
    const tickCount = 5;
    const step = Math.ceil(maxValue / tickCount);
    console.log(Array.from({ length: tickCount + 1 }, (_, i) => i * step));
    return Array.from({ length: tickCount + 1 }, (_, i) => i * step);
  }

  function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
    setTimeout(() => error.classList.add("hidden"), 3000);
  }

  function renderChart() {
    if (!data.length) {
      showError("No valid data to render");
      return;
    }

    chart.innerHTML = "";

    // calculate max value and chart dimensions
    const maxValue = Math.max(...data.map((item) => item.value));
    const chartHeight = 350; // match CSS height minus padding

    // render y axis ticks
    const yAxis = document.createElement("div");
    yAxis.className = "y-axis";
    const ticks = getTicks(maxValue);
    ticks.forEach((tick) => {
      const tickElement = document.createElement("div");
      tickElement.className = "y-tick";
      tickElement.textContent = tick;
      tickElement.style.bottom = `${scaleValue(tick, maxValue, chartHeight)}px`;
      yAxis.appendChild(tickElement);
    });
    chart.appendChild(yAxis);

    // render bars
    data.forEach((item) => {
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = `${scaleValue(item.value, maxValue, chartHeight)}px`;
      const label = document.createElement("div");
      label.className = "bar-label";
      label.textContent = item.label;
      bar.appendChild(label);
      chart.appendChild(bar);
    });
  }

  renderButton.addEventListener("click", () => {
    if (parseJson(jsonInput.value)) {
      renderChart();
    }
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (parseJson(e.target.result)) {
          jsonInput.value = e.target.result;
          renderChart();
        }
      };
      reader.readAsText(file);
    }
  });

  jsonInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (parseJson(jsonInput.value)) {
        renderChart();
      }
    }
  });
});
