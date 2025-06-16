document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  document.querySelectorAll("[data-tooltip]").forEach((elm) => {
    elm.addEventListener("mouseenter", function (e) {
      tooltip.textContent = this.dataset.tooltip;
      const rect = this.getBoundingClientRect();
      console.log("rect", rect);
      console.log("rect left", rect.left);
      console.log("rect bottom", rect.bottom);

      tooltip.style.left = rect.left + window.scrollX + "px";
      tooltip.style.top = rect.bottom + window.scrollY + "px";
      tooltip.style.display = "block";
    });

    elm.addEventListener("mouseleave", function (e) {
      tooltip.style.display = "none";
    });
  });
});
