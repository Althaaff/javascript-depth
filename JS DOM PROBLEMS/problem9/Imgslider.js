// javascript carouse image slider :
function createImageCarousel(containerId, images, interval = 3000) {
  let autoSlide;
  let autoSlideTimeout;

  const container = document.getElementById(containerId);
  container.classList.add("carousel-container");

  if (!container) {
    console.log("container doesn't exist");
    return;
  }

  const slider = document.createElement("div");
  slider.classList.add("carousel-slider");

  const dots = document.createElement("div");
  dots.classList.add("dots-container");

  let currentIndex = 0;

  const totalImages = images.length;

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }, interval);
  }

  startAutoSlide();

  function stopAutoSlide() {
    clearInterval(autoSlide);
    clearInterval(autoSlideTimeout);

    // start auto slide again after 3 seconds delay :
    autoSlideTimeout = setTimeout(() => {
      startAutoSlide();
    }, 3000);
  }

  // Add images and dots
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("carousel-img");
    slider.appendChild(img);

    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", index);
    dots.appendChild(dot);

    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"));

      console.log("currentIndex", currentIndex);
      updateCarousel();
      stopAutoSlide();
    });
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
  container.appendChild(dots);

  function updateCarousel() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveDot(currentIndex);
  }

  function updateActiveDot(activeIndex) {
    const dotElements = document.querySelectorAll(".dot");
    dotElements.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    console.log("current index prev :", currentIndex);
    updateCarousel();
    stopAutoSlide();
  };

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
    stopAutoSlide();
  };
}

const images = [
  "https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?q=80&w=1932&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524591431555-cc7876d14adf?q=80&w=1757&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554941426-e9604e34bc94?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518972458649-b0f242a400ff?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532716377393-5ffbea548d05?q=80&w=1770&auto=format&fit=crop",
];

document.addEventListener("DOMContentLoaded", () => {
  createImageCarousel("carousel", images);
});
