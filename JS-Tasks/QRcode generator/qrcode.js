const form = document.getElementById("qrForm");
const inputText = document.getElementById("inputText");

console.log("inputText", inputText);
const qrImage = document.getElementById("qrImage");

console.log("qr Image", qrImage);

const downloadLink = document.getElementById("downloadLink");
console.log("downloadLink", downloadLink);

form.addEventListener("submit", generateQR);

function generateQR(e) {
  e.preventDefault();
  const text = inputText.value.trim();

  if (!text) {
    alert("Please enter text or a URL");
    return;
  }

  // Use QRServer API (generated qr code based on text or URL) :
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    text
  )}`;

  console.log("api url", apiUrl);

  // display qr code :
  qrImage.src = apiUrl;
  qrImage.style.display = "block";

  // set up download link :
  downloadLink.href = apiUrl;
  downloadLink.download = "qr-code.png";
  downloadLink.style.display = "block";
}
