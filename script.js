//Activity 12 for high score input help
// 1. Click start quiz
// 2. Question and choices, make Selection
// 3. Next question and choices, make Selection (10 times?)
// 4. Score shown, with input boxes for name
// 5. Submit button
// 6. High score list shows with that name
var beginPage = document.getElementById("begin");
var beginButtonClick = document.getElementById("beginButton");
var gamePage = document.getElementById("game");
var questions = [
  {
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
    answer: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    answer: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: ["JavaScript", "terminal/bash", "Pfor loops", "console.log"],
    correctAnswer: "console.log",
  },
];

// On Click for beginButton
beginButtonClick.addEventListener(
  "click",
  //On click for beginButton closes beginPage
  function beginQuiz(event) {
    if (event.target.matches("button")) {
      beginPage.style.display = "none";
      gamePage.style.display = "block";
      timerEl.style.display = "block";

    } else {
      beginPage.style.display = "block";
    }
  }
);



function gamePlay (){
if(gamePage.style.display= "block;"){
//timer begins
//loop through array/object (questions)
//when answer clicked 
//next question if correct
//15 seconds off timer if incorrect
//next index in array shows
//again 
//after all questions, stop timer if not already stopped
//"none" game page, "block" score page
}

}

//Quiz timer
var timerEl = document.querySelector(".time");
//Am I even using this buzzerEl var??
var buzzerEl = document.querySelector("#buzzer");
var secondsLeft = 60;

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


//function for score submission
//form in HTML
//type name, submit "prevent default"
//push name to list
//score page "none", then scoreboard "block"

//scoreboard function?
//show OL of scores
//button to restart game
//button to clear board