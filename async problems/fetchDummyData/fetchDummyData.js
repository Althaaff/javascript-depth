const fetchButton = document.getElementById("fetchButton");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const displayContainer = document.getElementById("dataContainer");

fetchButton.addEventListener("click", () => {
  setTimeout(() => {
    fetchData();
  }, 2000);
});

async function fetchData() {
  displayContainer.innerHTML = "";
  loading.classList.add("hidden");
  error.classList.add("hidden");

  showLoading();

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    if (!response.ok) {
      throw new Error("failed to fetch...!");
    }

    if (response.ok) {
      const data = await response.json();

      displayData(data);
    }
  } catch (error) {
    isFetching = false;
    clearTimeout(loadingTimeout);
    showError(error.message);
  }
}

function displayData(posts) {
  displayContainer.innerHTML = "";
  loading.classList.add("hidden");
  error.classList.add("hidden");

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("data-item");
    postElement.innerHTML = `
      <strong>Post ${post.id}:</strong> ${post.title}
    `;
    displayContainer.appendChild(postElement);
  });
}

function showLoading() {
  displayContainer.innerHTML = "";
  loading.classList.remove("hidden");
  error.classList.add("hidden");
}
function showError(errorMessage) {
  displayContainer.innerHTML = "";
  loading.classList.add("hidden");
  error.textContent = errorMessage;
}
