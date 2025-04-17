const slider = document.getElementById("slider");
const valueBubble = document.getElementById("valueBubble");

slider.addEventListener("input", updateValueBubble);

function updateValueBubble() {
  const value = slider.value;
  const max = parseInt(slider.max);
  const min = parseInt(slider.min);

  // console.log(max, min);

  // console.log(value);

  valueBubble.textContent = value;

  valueBubble.classList.add("show");

  const range = max - min;

  const percent = (value - min) / range;
  console.log(percent);

  const sliderWidth = slider.offsetWidth;
  console.log("sliderWidth", sliderWidth);
  const thumbSize = 20;
  const bubbleWidth = valueBubble.offsetWidth;
  console.log("bubbleWidth", bubbleWidth);

  // position bubble centered above thumb :
  const position =
    percent * (sliderWidth - thumbSize) + thumbSize / 2 - bubbleWidth / 2;

  // console.log(percent * (sliderWidth - thumbSize));
  // console.log(thumbSize / 2 - bubbleWidth / 2);  // final current position is intial loads 132 //

  console.log("position", position);
  valueBubble.style.left = `${position}px`;
}

updateValueBubble();
