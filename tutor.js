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
var timerEl = document.querySelector(".time");
//change timer seconds to 60 before end
var secondsLeft = 60;
//Buttons for answers
var questionButtonOne = document.getElementById("buttonOne");
var questionButtonTwo = document.getElementById("buttonTwo");
var questionButtonThree = document.getElementById("buttonThree");
var questionButtonFour = document.getElementById("buttonFour");
var questionText = document.getElementById("questionParagraph");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var currentQuestionIndex = 0;
//Questions and answers object
var questionsArray = [
  {
    questionString: "Commonly used data type DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    questionString:
      "The condition in an if/else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    questionString: "Arrays in JavaScript can be used to store ___.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    questionString:
      "String values must be enclosed within ___ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    questionString:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "Pfor loops", "console.log"],
    correctAnswer: "console.log",
  },
];

//On click for beginButton closes beginPage

function beginQuiz() {
  //When begin quiz button is clicked, gamePage and timerEl show up
  beginPage.style.display = "none";
  gamePage.style.display = "block";
  timerEl.style.display = "block";
  //Questions showing on page , no answers yet
  var currentQuestion = questionsArray[currentQuestionIndex];
  console.log(currentQuestionIndex); //logs correctly
  questionText.textContent = currentQuestion.questionString;
  console.log(currentQuestion.questionString);

  //does it say textContent of null value in console.log because I need to look through another array?
  var currentAnswer = questionsArray[currentQuestionIndex];
  questionButtonOne.textContent = currentAnswer.answerArray;
  console.log(currentAnswer.answerArray); //WHATS UNDEFINED
  choicesEl.innerHTML = "";
  // loop overchoices
  currentAnswer.choices.forEach(function (choice) {
    // create new button for each choices
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute('style', 'background-color: purple');
    choiceNode.style.backgroundcolor = 'purple';
    choiceNode.style.height = '30px';
    choiceNode.style.width = '30px';
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    // event listener
    choiceNode.onclick = questionClick;
    //display on page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  //check is user guessed wrong
  if (this.value !== questionsArray[currentQuestionIndex].correctAnswer) {
    //penalize time
    secondsLeft -= 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }

    //display new time
    timerEl.textContent = secondsLeft;
    feedbackEl.textContent = "Incorrect"
  }
  else{
      feedbackEl.textContent = "That's right!"
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questionsArray.length){
      // call a fct quizEnd()
  }
}
//Click event listener

beginButtonClick.addEventListener("click", beginQuiz);

//when answer clicked
//next question if correct
//15 seconds off timer if incorrect
//next index in array shows
//again
//after all questions, stop timer if not already stopped
//"none" game page, "block" score page
//   }
// }

//Timer starts on beginButton click
//How do I style??
beginButtonClick.onclick = function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left for quiz.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
  console.log("Timer started.");
};
function sendMessage() {
  timerEl.textContent = "Time has expired.";
  //IF time expires THEN go to score page?
  console.log("Time expired.");
}

//function for score submission
//form in HTML
//type name, submit "prevent default"
//push name to list (Local storage for scoreboard)
//score page "none", then scoreboard "block"

//scoreboard function?
//show OL of scores
//local storage of those names and scores?
//button to restart game
//button to clear board

//quiz question array must append the HTML element on click