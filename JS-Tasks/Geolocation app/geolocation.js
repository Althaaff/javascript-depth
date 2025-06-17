const showDetails = document.getElementById("showDetails");
const fullAddress = document.querySelector(".fullAddress");
const formattedAddress = document.querySelector(".formattedAddress");

// api to get user address :
let apiKey = "fa794b67aaa447a6a77b6da6413cb98b";
let apiEndPoint = "https://api.opencagedata.com/geocode/v1/json";

const getUserCurrentAddress = async (latitude, longitude) => {
  let query = `${latitude},${longitude}`;
  const apiUrl = `${apiEndPoint}?key=${apiKey}&q=${query}&pretty=1`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log("data", data);

    const { city, state, postcode, country } = data.results[0].components;
    fullAddress.textContent = `full address: ${city} - ${state} - ${postcode} - ${country}`;
    formattedAddress.textContent = `formatted address: ${data.results[0].formatted}`;
  } catch (error) {}
};

document.getElementById("geo-btn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        showDetails.textContent = `the latitude is ${latitude} and longitude is ${longitude}`;

        getUserCurrentAddress(latitude, longitude);
      },
      (error) => {
        showDetails.textContent = error.message;
        console.log(error.message);
      }
    );
  }
});
