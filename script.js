//Activity 12 for high score input help
// 1. Click start quiz
// 2. Question and choices, make Selection
// 3. Next question and choices, make Selection (10 times?)
// 4. Score shown, with input boxes for name
// 5. Submit button
// 6. High score list shows with that name

var question = [{
  question: "Gandalf",
  answer: ["greyhame", "stormcrow", "galdalfTheGray"],
  correctAnswer: "grayhame",
},
{
    question: "Gandalf",
    answer: ["greyhame", "stormcrow", "galdalfTheGray"],
    correctAnswer: "grayhame",
  },
  {
    question: "Gandalf",
    answer: ["greyhame", "stormcrow", "galdalfTheGray"],
    correctAnswer: "grayhame",
  },
  {
    question: "Gandalf",
    answer: ["greyhame", "stormcrow", "galdalfTheGray"],
    correctAnswer: "grayhame",
  },
  {
    question: "Gandalf",
    answer: ["greyhame", "stormcrow", "galdalfTheGray"],
    correctAnswer: "grayhame",
  },];

// On Click for beginButton to start quiz
var beginButton = document.querySelector("#beginButton");

beginButton.addEventListener("click", function () {

console.log("Begin Button Clicked");
});

//Quiz timer
var timerEl = document.querySelector(".time");
var buzzerEl = document.getElementById("buzzer");
var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left for quiz.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
  console.log("Timer started.");
}
function sendMessage() {
  timerEl.textContent = "Time has expired.";
  //IF time expires THEN go to score page?
  console.log("Time expired.");
}
setTime();
