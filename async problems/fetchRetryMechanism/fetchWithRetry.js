const fetchButton = document.getElementById("fetchButton");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const dataContainer = document.getElementById("displayContainer");

console.log(dataContainer);

fetchButton.addEventListener("click", () => {
  setTimeout(() => {
    fetchData();
  }, 3000);
});

// utility function to create a delay :
function sleep(ms) {
  return new Promise((resolve) => {
    return setTimeout(resolve("data"), ms);
  });
}

// test (resolve):
// sleep().then((data) => {
//   console.log("data", data);
// });

// fetch with retry mechanism
async function fetchWithRetry(url, maxRetries = 3, retryDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(attempt); // Note:- if in the first iteration api got succeed loop wont run again next iterations
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return await response.json(); // success immediatley return data
    } catch (err) {
      if (attempt === maxRetries) {
        console.log("failed after 3 attempts!");
        throw new Error(`Failed after ${maxRetries} attempts: ${err.message}`);
      }
      console.log(`Attempt ${attempt} failed. Retrying in ${retryDelay}ms...`);
      await sleep(retryDelay); // wait before retrying again //
    }
  }
}

async function fetchData() {
  // show loading state :
  showLoading();

  try {
    // fetch data with retry
    const data = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    displayData(data);
  } catch (err) {
    showError(err.message);
  }
}

function displayData(posts) {
  loading.classList.add("hidden");
  error.classList.add("hidden");
  dataContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "data-item";
    postElement.innerHTML = `
      <strong>Post ${post.id}:</strong> ${post.title}
    `;
    dataContainer.appendChild(postElement);
  });
}

function showLoading() {
  loading.classList.remove("hidden");
  error.classList.add("hidden");
  dataContainer.innerHTML = "";
}

function showError(message) {
  loading.classList.add("hidden");
  error.classList.remove("hidden");
  error.textContent = message;
  dataContainer.innerHTML = "";
}
