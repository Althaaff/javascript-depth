class VolumeKnob {
  constructor(knobElement, options = {}) {
    this.knob = knobElement;
    this.valueDisplay = document.getElementById("valueDisplay");
    this.minValue = options.minValue || 0;
    this.maxValue = options.maxValue || 100;
    this.currentValue = options.initialValue || 50;
    this.rotationRange = options.rotationRange || 270;
    this.startAngle = 0;
    this.isDragging = false;
    this.startValue = 0;

    this.createMarks();

    this.updateDisplay();
    this.setRotation();

    this.knob.addEventListener("mousedown", this.startDrag.bind(this));
    document.addEventListener("mousemove", this.drag.bind(this));
    document.addEventListener("mouseup", this.endDrag.bind(this));

    this.knob.addEventListener("touchstart", this.startDrag.bind(this));
    document.addEventListener("touchmove", this.drag.bind(this));
    document.addEventListener("touchend", this.endDrag.bind(this));
  }

  createMarks() {
    const marksContainer = document.getElementById("knobMarks");
    const markCount = 12;

    for (let i = 0; i < markCount; i++) {
      const mark = document.createElement("div");
      mark.className = "mark";
      mark.style.transform = `rotate(${i * (360 / markCount)}deg)`;
      marksContainer.appendChild(mark);
    }
  }

  startDrag(e) {
    this.isDragging = true;
    this.startValue = this.currentValue;

    const rect = this.knob.getBoundingClientRect();
    console.log("rect", rect);
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    this.startAngle =
      (Math.atan2(clientY - center.y, clientX - center.x) * 180) / Math.PI;

    console.log("start angle", this.startAngle);

    e.preventDefault();
  }

  drag(e) {
    if (!this.isDragging) return;

    const rect = this.knob.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    console.log("center", center);

    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    const currentAngle =
      (Math.atan2(clientY - center.y, clientX - center.x) * 180) / Math.PI;
    console.log("current angle", currentAngle);

    let angleDiff = currentAngle - this.startAngle;

    if (angleDiff > 180) angleDiff -= 360;
    if (angleDiff < -180) angleDiff += 360;

    const angleToValueRatio =
      this.rotationRange / (this.maxValue - this.minValue);
    let newValue = this.startValue + angleDiff / angleToValueRatio;

    newValue = Math.max(this.minValue, Math.min(this.maxValue, newValue));

    this.currentValue = Math.round(newValue);
    this.setRotation();
    this.updateDisplay();

    this.knob.dispatchEvent(
      new CustomEvent("valueChange", {
        // CustomEvent interface represents events initialized by an application for any purpose //
        detail: { value: this.currentValue },
      })
    );

    e.preventDefault();
  }

  endDrag() {
    this.isDragging = false;
  }

  setRotation() {
    const rotation =
      ((this.currentValue - this.minValue) / (this.maxValue - this.minValue)) *
        this.rotationRange -
      this.rotationRange / 2;

    console.log("rotation", rotation);
    this.knob.style.transform = `rotate(${rotation}deg)`;
  }

  updateDisplay() {
    this.valueDisplay.textContent = `${this.currentValue}%`;
  }

  setValue(value) {
    this.currentValue = Math.max(this.minValue, Math.min(this.maxValue, value));
    this.setRotation();
    this.updateDisplay();
  }

  getValue() {
    return this.currentValue;
  }
}

const knob = new VolumeKnob(document.getElementById("volumeKnob"), {
  minValue: 0,
  maxValue: 100,
  initialValue: 50,
  rotationRange: 270,
});

document.getElementById("volumeKnob").addEventListener("valueChange", (e) => {
  console.log("Volume changed to:", e.detail.value);
});
