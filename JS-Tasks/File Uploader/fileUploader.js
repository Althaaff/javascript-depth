const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const clearButton = document.getElementById("clearButton");
const fileList = document.getElementById("fileList");

// Drag and drop events :
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(
    eventName,
    () => dropArea.classList.add("highlight"),
    false
  );
});

["dragleave", "drop"].forEach((eventName) => {
  console.log("leaved! dropped!");
  dropArea.addEventListener(
    eventName,
    () => dropArea.classList.remove("highlight"),
    false
  );
});

dropArea.addEventListener("drop", handleDrop, false);
fileInput.addEventListener("change", handleFiles, false);
clearButton.addEventListener("click", clearFiles, false);

// Open file input when clicking drop area
dropArea.addEventListener("click", () => fileInput.click());

function handleDrop(e) {
  console.log("dropped!");
  console.log(e.target.files);
  const files = e.dataTransfer.files;
  console.log("files", files);
  handleFiles({ target: { files } });
}

function handleFiles(e) {
  const files = Array.from(e.target.files);
  console.log(files);
  fileList.innerHTML = "";
  clearButton.classList.remove("hidden");

  files.forEach((file) => {
    // Validate file
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (!validTypes.includes(file.type)) {
      displayFile(file, "error", "Invalid file type");
      return;
    }
    if (file.size > maxSize) {
      displayFile(file, "error", "File too large (max 5MB)");
      return;
    }

    // Display file and simulate upload
    displayFile(file, "pending", "Uploading...");
    simulateUpload(file);
  });
}

function displayFile(file, status, message) {
  const fileItem = document.createElement("div");
  fileItem.className = `file-item ${status}`;

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.style.maxWidth = "300px";
  img.style.maxHeight = "300px";
  img.style.objectFit = "cover";

  fileItem.innerHTML = `
    <span>${file.name} (${formatSize(file.size)})</span>
    <span>${message}</span>
  `;

  fileItem.appendChild(img);

  fileList.appendChild(fileItem);
}

function simulateUpload(file) {
  setTimeout(() => {
    const fileItem = fileList.querySelector(`.file-item:last-child`);
    if (fileItem) {
      fileItem.className = "file-item success";
      fileItem.children[1].textContent = "Uploaded";
    }
  }, 2000); // Simulate 2-second upload
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function clearFiles() {
  fileList.innerHTML = "";
  clearButton.classList.add("hidden");
  fileInput.value = "";
}
