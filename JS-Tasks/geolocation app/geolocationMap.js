document.addEventListener("DOMContentLoaded", () => {
  const getLocationButton = document.getElementById("getLocationButton");
  const status = document.getElementById("status");
  const coordinates = document.getElementById("coordinates");
  const mapContainer = document.getElementById("map");
  let map = null;
  let marker = null;

  function formatCoords({ latitude, longitude }) {
    return `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
  }

  function toggleLoading(show) {
    status.textContent = show ? "Locating..." : "";
    status.classList.toggle("loading", show);
    getLocationButton.disabled = show;
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.classList.remove("loading", "success", "error");
    status.classList.add(type);
    setTimeout(() => {
      status.textContent = "";
      status.classList.remove(type);
    }, 3000);
  }

  function initMap({ latitude, longitude }) {
    if (map) {
      map.setView([latitude, longitude], 13);
      if (marker) marker.setLatLng([latitude, longitude]);
      else marker = L.marker([latitude, longitude]).addTo(map);
      return;
    }
    map = L.map(mapContainer).setView([latitude, longitude], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    marker = L.marker([latitude, longitude]).addTo(map);
  }

  async function getLocation() {
    if (!navigator.geolocation) {
      showStatus("Geolocation is not supported by your browser", "error");
      return;
    }
    toggleLoading(true);
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          maximumAge: 0,
        });
      });
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      coordinates.textContent = formatCoords(coords);
      initMap(coords);
      showStatus("Location found", "success");
    } catch (err) {
      let message = "Unable to get location";
      if (err.code === 1) message = "Permission denied";
      else if (err.code === 2) message = "Position unavailable";
      else if (err.code === 3) message = "Request timed out";
      showStatus(message, "error");
    } finally {
      toggleLoading(false);
    }
  }

  getLocationButton.addEventListener("click", getLocation);
});
