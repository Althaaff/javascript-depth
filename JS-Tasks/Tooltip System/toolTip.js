document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);
  let timeout;

  function getPosition(element) {
    return element.dataset.tooltipPosition || "top";
  }

  function isOutOfViewport(rect) {
    return {
      top: rect.top < 0,
      bottom: rect.bottom > window.innerHeight,
      left: rect.left < 0,
      right: rect.right > window.innerWidth,
    };
  }

  function positionTooltip(trigger, position) {
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let top,
      left,
      newPosition = position;

    // initial positioning
    switch (position) {
      case "top":
        top = triggerRect.top - tooltipRect.height - 10;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + 10;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - 10;
        break;
      case "right":
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + 10;
        break;
      default:
        top = triggerRect.top - tooltipRect.height - 10;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        newPosition = "top";
    }

    // adjust for viewport bounds
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    const tooltipNewRect = tooltip.getBoundingClientRect();
    const out = isOutOfViewport(tooltipNewRect);

    if (out.top && newPosition === "top") {
      newPosition = "bottom";
      top = triggerRect.bottom + 10;
    } else if (out.bottom && newPosition === "bottom") {
      newPosition = "top";
      top = triggerRect.top - tooltipRect.height - 10;
    } else if (out.left && newPosition === "left") {
      newPosition = "right";
      left = triggerRect.right + 10;
    } else if (out.right && newPosition === "right") {
      newPosition = "left";
      left = triggerRect.left - tooltipRect.width - 10;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.className = `tooltip tooltip-${newPosition}`;
  }

  function showTooltip(trigger) {
    const content = trigger.dataset.tooltip;
    if (!content) return;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      tooltip.textContent = content;
      tooltip.setAttribute("aria-describedby", "tooltip");
      positionTooltip(trigger, getPosition(trigger));
      tooltip.classList.add("show");
    }, 200);
  }

  function hideTooltip() {
    clearTimeout(timeout);
    tooltip.classList.remove("show");
    tooltip.textContent = "";
    tooltip.removeAttribute("aria-describedby");
  }

  document.querySelectorAll("[data-tooltip]").forEach((element) => {
    element.addEventListener("mouseenter", () => showTooltip(element));
    element.addEventListener("mouseleave", hideTooltip);
    element.addEventListener("focus", () => showTooltip(element));
    element.addEventListener("blur", hideTooltip);
  });

  window.addEventListener("resize", hideTooltip);
  window.addEventListener("scroll", hideTooltip);
});
