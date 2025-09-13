document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    console.log("forEach runs!");
    header.addEventListener("click", () => {
      const accordionItem = header.closest(".accordion-item");
      accordionItem.classList.toggle("active");
    });
  });
});
