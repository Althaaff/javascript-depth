const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const finalScore = document.getElementById("finalScore");
const resultElement = document.getElementById("results");

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function intiQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  quizContainer.classList.remove("hidden");
  resultElement.classList.add("hidden");

  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  // console.log(currentQuestion);
  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${
    currentQuestion.question
  }`;

  optionsElement.innerHTML = "";
  feedbackElement.classList.add("hidden");

  currentQuestion.options?.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.innerHTML = `
     <input type="radio" name="answer" id="option${index}" value="${option}" />
     <label for="option${index}">${option}</label>
    `;

    optionsElement.appendChild(optionElement);
  });
}

function getSelectedAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  console.log("selectedAnswer", selectedOption);

  return selectedOption ? selectedOption.value : null;
}

function showFeedback(isCorrect, correctAnswer) {
  feedbackElement.classList.remove("hidden");

  if (isCorrect) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.classList.add("correct");
    feedbackElement.classList.remove("incorrect");
  } else {
    feedbackElement.textContent = `Incorrect The Correct answer is ${correctAnswer}!`;
    feedbackElement.classList.add("incorrect");
    feedbackElement.classList.remove("correct");
  }
}

// submit quiz :
submitButton.addEventListener("click", () => {
  const selectedAnswer = getSelectedAnswer();

  if (!selectedAnswer) {
    feedbackElement.classList.remove("hidden");
    feedbackElement.textContent = "Please Select Answer..";
    feedbackElement.classList.remove("correct", "incorrect");

    return;
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correct;

  if (isCorrect) {
    score++;
  }

  // pass data to showFeedback function :
  showFeedback(isCorrect, currentQuestion?.correct);

  // move to next question or show result :
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    setTimeout(() => {
      renderQuestion();
    }, 2000);
  } else {
    setTimeout(() => {
      showResult();
    }, 3000);
  }
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultElement.classList.remove("hidden");
  finalScore.textContent = `${score} Out Of ${quizData.length}`;
}

resetButton.addEventListener("click", intiQuiz);

// start quiz  (render initial data) :
intiQuiz();
