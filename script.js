//Activity 12 for high score input help
// 1. Click start quiz
// 2. Question and choices, make Selection
// 3. Next question and choices, make Selection (10 times?)
// 4. Score shown, with input boxes for name
// 5. Submit button
// 6. High score list shows with that name

var question = [{
  question: "What is an example of a boolean value?",
  answer: ["true", "3", "Strings", "if/else"],
  correctAnswer: "true",
},
{
    question: "How would you denote 'or' in a condition?",
    answer: ["||", "&&", "oR", "-+"],
    correctAnswer: "||",
  },
  {
    question: "Objects cannot contain arrays.",
    answer: ["true", "false"],
    correctAnswer: "false",
  },
  {
    question: "We can change styles and properties of HTML elements using javascript by traversing the...",
    answer: ["DOM", "HTML", "CSS", "User Interaction"],
    correctAnswer: "DOM",
  },
  {
    question: "What do we do with arrays?",
    answer: ["Iterate through them", "Store them", "Push them to the console", "Return them in the DOM"],
    correctAnswer: "Iterate through them",
  },];

// On Click for beginButton to start quiz
// var beginButton = document.querySelector("#beginButton");

// beginButton.addEventListener("click", function () {

// console.log("Begin Button Clicked");
// });

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
