function createImageCarousel(containerId, images, interval = 3000) {
  const container = document.getElementById(containerId);
  container.classList.add("carousel-container");

  if (!container) {
    console.log("container doesnt exist");

    return;
  }

  const slider = document.createElement("div");
  slider.classList.add("carousel-slider");

  const dots = document.querySelectorAll("dots");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {});
  });

  // add images to slider :
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("carousel-img");
    slider.appendChild(img);
  });

  const prevBtn = document.createElement("button");
  prevBtn.innerText = "<";
  prevBtn.classList.add("carousel-btn", "prev");

  const nextBtn = document.createElement("button");
  nextBtn.innerText = ">";
  nextBtn.classList.add("carousel-btn", "next");

  container.appendChild(slider);
  container.appendChild(prevBtn);
  container.appendChild(nextBtn);

  let index = 0;
  console.log("idx", index);

  const totalImages = images.length;

  function updateCarousel() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.onclick = () => {
    index = (index - 1 + totalImages) % totalImages;
    console.log("idx", index);

    updateCarousel();
  };

  nextBtn.onclick = () => {
    index = (index + 1) % totalImages;
    updateCarousel();
  };

  // auto slide :
  setInterval(() => {
    index = (index + 1) % totalImages;
    updateCarousel();
  }, interval);
}

const images = [
  "https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524591431555-cc7876d14adf?q=80&w=1757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554941426-e9604e34bc94?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518972458649-b0f242a400ff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1532716377393-5ffbea548d05?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

document.addEventListener("DOMContentLoaded", () => {
  createImageCarousel("carausel", images);
});
