document.addEventListener("DOMContentLoaded", () => {
  const metricBtn = document.getElementById("metric-btn");
  const imperialBtn = document.getElementById("imperial-btn");
  const metricInputs = document.getElementById("imperial-inputs");
  const imperialInputs = document.getElementById("imperial-inputs");
  const calcBtn = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");
  const bmiValue = document.getElementById("bmi-value");
  const category = document.getElementById("category");
  const bmiMessage = document.getElementById("bmi-message");

  let isMetric = true;

  // Toggle between metric and imperial units :
  metricBtn.addEventListener("click", () => {
    isMetric = true;

    metricBtn.classList.add("active");
    imperialBtn.classList.remove("active");
    metricInputs.style.display = "block";
    imperialInputs.style.display = "none";

    // call the below function here :
    clearResults();
  });

  imperialBtn.addEventListener("click", () => {
    isMetric = false;

    imperialBtn.classList.add("active");
    metricBtn.classList.remove("active");
    imperialInputs.style.display = "block";
    metricInputs.style.display = "none";
    clearResults();
  });

  calcBtn.addEventListener("click", (e) => {
    let weight, height;

    if (isMetric) {
      weight = parseFloat(document.getElementById("weight").value);
      height = parseFloat(document.getElementById("height").value);

      if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
      }
    } else {
      const weightLb = parseFloat(document.getElementById("weight-lb").value);
      const heightFt = parseFloat(document.getElementById("height-ft").value);
      const heightIn =
        parseFloat(document.getElementById("height-in").value) || 0;

      if (!weightLb || !heightFt || weightLb <= 0 || heightFt <= 0) {
        alert("Please enter valid weight and height values.");
        return;
      }

      weight = weightLb;
      height = heightFt * 12 + heightIn; // converting to inches //
    }

    // calculate bmi :
    let bmi;

    if (isMetric) {
      bmi = weight / (height * height);
    } else {
      // Imperial formula: (weight in pounds / (height in inches)²) * 703 :
      bmi = (weight / (height * height)) * 703;
    }

    // Round to one decimal place :
    bmi = Math.round(bmi * 10) / 10;
    console.log("final bmi value", bmi);

    // determine category :
    let categoryText, message, categoryClass;

    if (bmi < 18.5) {
      categoryText = "Underweight";
      message =
        "You may need to gain weight. Consult with a healthcare provider.";
      categoryClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      categoryText = "Normal weight";
      message = "Your weight is within the normal range for your height.";
      categoryClass = "normal";
    } else if (bmi >= 25 && bmi < 30) {
      categoryText = "Overweight";
      message =
        "You may need to lose weight. Consider consulting with a healthcare provider.";
      categoryClass = "overweight";
    } else {
      categoryText = "Obese";
      message =
        "It is recommended to consult with a healthcare provider about weight management.";
      categoryClass = "obese";
    }

    // display result :
    bmiValue.textContent = bmi;
    category.textContent = categoryText;
    category.className = "category" + categoryClass;
    bmiMessage.textContent = message;
    resultDiv.style.display = "block";
  });

  function clearResults() {
    resultDiv.style.display = "none";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight-lb").value = "";
    document.getElementById("height-ft").value = "";
    document.getElementById("height-in").value = "";
  }
});
