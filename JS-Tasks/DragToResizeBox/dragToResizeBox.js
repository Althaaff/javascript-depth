document.addEventListener("DOMContentLoaded", () => {
  const resizable = document.getElementById("resizable");
  const aspectLock = document.getElementById("aspectLock");
  const dimensions = document.getElementById("dimensions");

  const state = {
    width: 200,
    height: 200,
    isDragging: false,
    handleType: null,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    aspectRatio: 1,
    lockAspect: false,
  };

  function createHandle(className) {
    const handle = document.createElement("div");
    handle.className = `handle ${className}`;
    resizable.appendChild(handle);

    return handle;
  }

  function initResizable() {
    state.aspectRatio = state.width / state.height;
    console.log("aspect ratio", state.aspectRatio);

    ["bottom-right", "bottom", "right"].forEach((className) => {
      const handle = createHandle(className);

      handle.addEventListener("mousedown", startDrag);
      handle.addEventListener("touchstart", startDrag, { passive: false });
    });
  }

  function getCoords(e) {
    const { clientX, clientY } = e.type.startsWith("touch") ? e.touches[0] : e;

    return { x: clientX, y: clientY };
  }

  function enforceConstraint(width, height) {
    let min = 50;

    width = Math.max(min, width);
    height = Math.max(min, height);

    if (state.lockAspect) {
      if (state.handleType.includes("right")) {
        height = width / state.aspectRatio;
        // console.log("aspect height", height);
      } else if (state.handleType.includes("bottom")) {
        width = height * state.aspectRatio;
        // console.log("aspect width", width);
      } else {
        const widthBasedHeight = width / state.aspectRatio;
        const heightBasedWidth = height * state.aspectRatio;
        if (
          Math.abs(widthBasedHeight - state.height) >
          Math.abs(height - state.height)
        ) {
          height = widthBasedHeight;
        } else {
          width = heightBasedWidth;
        }
      }
    }

    return { width: Math.round(width), height: Math.round(height) };
  }

  function resizeContainer(e) {
    if (!state.isDragging) return;
    e.preventDefault();

    const { x, y } = getCoords(e);
    // console.log("x resize", x);
    // console.log("y resize", y);
    let newWidth = state.startWidth;
    let newHeight = state.startHeight;
    // console.log("new width", newWidth);
    // console.log("new height", newHeight);

    if (state.handleType.includes("right")) {
      // console.log("consoled");
      newWidth = state.startWidth + (x - state.startX);
      // console.log("updated new width", newWidth);
    } else if (state.handleType.includes("bottom")) {
      newHeight = state.startHeight + (y - state.startY);
      // console.log("updated new height", newHeight);
    }

    const { width, height } = enforceConstraint(newWidth, newHeight);
    state.width = width;
    state.height = height;
    resizable.style.width = `${width}px`;
    resizable.style.height = `${height}px`;
    renderDimensions();
  }

  function startDrag(e) {
    e.preventDefault();

    state.isDragging = true;
    state.handleType = e.target.className.split(" ").find((className) => {
      // console.log("classname", className);
      return className !== "handle"; // returns classname (ex: bottom or right or bottom-right)
    });

    const { x, y } = getCoords(e);
    // console.log("x", x, "y", y);

    state.startX = x;
    state.startY = y;
    state.startWidth = state.width;
    state.startHeight = state.height;

    document.addEventListener("mousemove", resizeContainer);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchmove", resizeContainer, {
      passive: false,
    });
    document.addEventListener("touchend", endDrag);
  }

  function endDrag() {
    state.isDragging = false;

    document.addEventListener("mousemove", resizeContainer);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchmove", resizeContainer);
    document.addEventListener("touchend", endDrag);
  }

  function renderDimensions() {
    dimensions.textContent = `Width --> ${state.width}px, Height --> ${state.height}px `;
  }

  aspectLock.addEventListener("change", () => {
    state.lockAspect = aspectLock.checked;
  });

  initResizable();
  renderDimensions();
});
