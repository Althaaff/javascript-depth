let progressBar = document.getElementById("progressBar");
console.log(progressBar);

function updateProgressBar() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // console.log("scrolll top", scrollTop);

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  console.log("scrolll height", scrollHeight);

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // console.log("scroll percent", scrollPercent);

  progressBar.style.width = `${scrollPercent}%`;
}

let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;

    requestAnimationFrame(() => {
      updateProgressBar();

      isScrolling = false;
    });
  }
});

// intial update :
updateProgressBar();
