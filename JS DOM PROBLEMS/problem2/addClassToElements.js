function addClassToElements(target, newClass) {
  const elements = document.querySelectorAll(`.${target}`);

  elements.forEach((element) => {
    element.classList.add(newClass);
  });
}

addClassToElements("box", "hilight");

function addStyles(bgColor) {
  const hilightDivs = document.querySelectorAll(".hilight");

  hilightDivs.forEach((div) => {
    div.style.backgroundColor = bgColor;
    div.style.color = "white";
    div.style.fontSize = "20px";
    div.style.fontFamily = "sans-serif";
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.innerHTML = "Hello, Dev";
    div.style.textAlign = "center";
  });
}

addStyles("red");
