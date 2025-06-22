document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const clearButton = document.getElementById("clearButton");
  const status = document.getElementById("status");
  const textOutput = document.getElementById("textOutput");

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = null;
  const state = {
    isRecording: false,
    language: "en-US",
  };

  function initSpeechRecognition() {
    if (!SpeechRecognition) {
      showStatus(
        "Speech recognition is not supported in this browser",
        "error"
      );
      startButton.disabled = true;
      return null;
    }
    recognition = new SpeechRecognition();
    recognition.lang = state.language;
    recognition.continuous = true;
    recognition.interimResults = true;

    console.log(recognition);

    recognition.onresult = (event) => {
      console.log("triggered", event);
      let interim = "";
      let final = "";
      for (const result of event.results) {
        const transcript = result[0].transcript;
        console.log("transcript", transcript);
        if (result.isFinal) {
          final += transcript + " ";
        } else {
          interim = transcript;
        }
      }
      textOutput.value = (textOutput.value + final + interim).trim();
      textOutput.scrollTop = textOutput.scrollHeight;
    };

    recognition.onerror = (event) => {
      let message = "Speech recognition error";
      if (event.error === "no-speech") message = "No speech detected";
      else if (event.error === "not-allowed")
        message = "Microphone access denied";
      else if (event.error === "network") message = "Network error";
      showStatus(message, "error");
      stopRecording();
    };

    recognition.onend = () => {
      if (state.isRecording) {
        recognition.start(); // Restart for continuous recognition
      } else {
        updateButtons();
        showStatus("Stopped", "status");
      }
    };

    return recognition;
  }

  function startRecording() {
    if (!recognition) recognition = initSpeechRecognition();
    if (!recognition) return;

    try {
      recognition.start();
      state.isRecording = true;
      updateButtons();
      showStatus("Listening...", "listening");
      textOutput.focus();
    } catch (err) {
      showStatus("Failed to start recording", "error");
    }
  }

  function stopRecording() {
    if (recognition && state.isRecording) {
      recognition.stop();
      state.isRecording = false;
      updateButtons();
      showStatus("Stopped", "status");
    }
  }

  function clearText() {
    textOutput.value = "";
    textOutput.focus();
    showStatus("Text cleared", "status");
  }

  function updateButtons() {
    startButton.disabled = state.isRecording;
    stopButton.disabled = !state.isRecording;
    startButton.classList.toggle("recording", state.isRecording);
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.classList.remove("listening", "error", "status");
    status.classList.add(type);
    if (type !== "listening") {
      setTimeout(() => {
        status.textContent = "";
        status.classList.remove(type);
      }, 3000);
    }
  }

  startButton.addEventListener("click", startRecording);
  stopButton.addEventListener("click", stopRecording);
  clearButton.addEventListener("click", clearText);

  // Initialize
  initSpeechRecognition();
});
