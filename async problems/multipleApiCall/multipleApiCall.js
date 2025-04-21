const fetchButton = document.getElementById("fetchButton");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const dataContainer = document.querySelector(".dataContainer");

fetchButton.addEventListener("click", () => {
  setTimeout(() => {
    fetchData();
  }, 2000);
});

async function fetchMultipeApi(urls) {
  const promises = await urls.map(async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("failed here!");
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log("error", error.message);
      return { error: err.message, url }; // return error for this URL
    }
  });

  // Resolves: If all promises in the array resolve successfully, it returns a fulfilled promise with an array of the resolved values (in the same order as the input promises).
  // Rejects: If any promise in the array rejects, it immediately returns a rejected promise with the reason (error) of the first promise that rejected. It doesn’t wait for other promises to complete.
  return Promise.all(promises);
}

async function fetchData() {
  // show loading state :
  showLoading();

  const urls = [
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    "https://jsonplaceholder.typicode.com/users?_limit=5",
  ];

  try {
    const resullts = await fetchMultipeApi(urls);
    console.log(resullts);

    displayData(resullts);
  } catch (error) {
    showError(error);
  }
}

function displayData(results) {
  error.classList.add("hidden");
  loading.classList.add("hidden");

  dataContainer.innerHTML = "";

  results.forEach((result, index) => {
    const section = document.createElement("div");
    section.className = "data-section";

    if (result.error) {
      section.innerHTML = `<p>Error fetching data: ${result.error}</p>`;
    } else {
      const title = index === 0 ? "POST" : "USERS";
      section.innerHTML = `<h3>${title}</h3>`;

      result.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "data-item";
        itemElement.innerHTML =
          index === 0
            ? `<strong>Post ${item.id}:</strong> ${item.title}`
            : `<strong>User ${item.id}:</strong> ${item.name}`;
        section.appendChild(itemElement);
      });
    }

    dataContainer.appendChild(section);
  });
}
function showLoading() {
  loading.classList.remove("hidden");
  error.classList.add("hidden");
  dataContainer.innerHTML = "";
}

function showError(err) {
  loading.classList.add("hidden");
  error.classList.remove("hidden");
  error.textContent = err.message || "Error occured!";
  dataContainer.innerHTML = "";
}
