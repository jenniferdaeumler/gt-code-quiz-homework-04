//Activity 12 for high score input help
// 1. Click start quiz
// 2. Question and choices, make Selection
// 3. Next question and choices, make Selection (10 times?)
// 4. Score shown, with input boxes for name
// 5. Submit button
// 6. High score list shows with that name

var gamePage = document.getElementById("#game")

var question = [{
  question: "Commonly used data type DO NOT include",
  answer: ["strings", "booleans", "alerts", "numbers"],
  correctAnswer: "alerts",
},
{
    question: "The condition in an if/else statement is enclosed within ___.",
    answer: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above",
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answer: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: ["JavaScript", "terminal/bash", "Pfor loops", "console.log"],
    correctAnswer: "console.log",
  },];

// On Click for beginButton to start quiz
var beginButtonClick = document.querySelector("#beginButton");

beginButtonClick.addEventListener("click", function () {
event.gamePage
console.log("Begin Button Clicked");
//Div containing homeScreen hides


//Div containing Game appears
//Call a function that starts the game ? 


});

// OR THIS On Click for beginButton to start quiz
function clickBeginButton() {
    var x = document.getElementById("#game");
    if (x.innerHTML.display === "none") {
      x.innerHTML.display = "block";
    } else {
      x.inner.display = "none";
    }
  }

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
