let cityInput = document.getElementById("cityInput");
let searchButton = document.getElementById("searchButton");
let error = document.getElementById("error");
let loading = document.getElementById("loading");
let weather = document.getElementById("weather");
let cityName = document.getElementById("cityname");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let unitToggle = document.getElementById("unitToggle");

console.log(
  loading,
  weather,
  cityName,
  temperature,
  description,
  humidity,
  unitToggle
);

let weatherData = null;
let isCelsius = true;

const API_KEY = "9fd25c76ce1355f99c5ba43780721ce1";

async function fetchWeather(city) {
  if (!city.trim()) {
    throw new Error("Please Enter City Name...");
  }

  showLoading();

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to fetch the city weather..");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

function displayWeather(data) {
  console.log("data", data);
  weatherData = data;

  weather.classList.remove("hidden");
  error.classList.add("hidden");
  loading.classList.add("hidden");

  cityName.textContent = `City Name: ${data?.name}`;
  description.textContent = `Condition: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  updateTemprature();
}

function updateTemprature() {
  if (!weatherData) return;

  const tempC = weatherData?.main.temp;
  const temp = isCelsius ? tempC : (tempC * 9) / 5 + 32;
  temperature.textContent = `Temperature: ${temp.toFixed(1)} °${
    isCelsius ? "C" : "F"
  }`;

  unitToggle.textContent = `Switch to °${isCelsius ? "F" : "C"}`;
}

function showLoading() {
  error.classList.add("hidden");
  loading.classList.remove("hidden");
  weather.classList.add("hidden");
}

function showError(message) {
  error.classList.remove("hidden");
  error.textContent = message;
  loading.classList.add("hidden");
  weather.classList.add("hidden");
}

searchButton.addEventListener("click", async () => {
  try {
    const city = cityInput.value;

    const data = await fetchWeather(city);

    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
});

cityInput.addEventListener("keypress", async () => {
  try {
    const city = cityInput.value;

    const data = await fetchWeather(city);

    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
});

unitToggle.addEventListener("click", () => {
  isCelsius = !isCelsius;
  updateTemprature();
});
