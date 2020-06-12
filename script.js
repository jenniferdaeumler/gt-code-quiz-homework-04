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
var scorePage = document.getElementById("score");
var timerEl = document.querySelector(".time");
//change timer seconds to 60 before end
var secondsLeft = 5;
var questionText = document.getElementById("question-paragraph");
var choicesEl = document.getElementById("choice-buttons");
var feedbackEl = document.getElementById("feedback");
var currentQuestionIndex = 0;
//Questions and answers object
var questionsArray = [
  {
    questionString: "Commonly used data type DO NOT include:",
    answerArray: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
  {
    questionString:
      "The condition in an if/else statement is enclosed within ___.",
    answerArray: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2,
  },
  {
    questionString: "Arrays in JavaScript can be used to store ___.",
    answerArray: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 3,
  },
  {
    questionString:
      "String values must be enclosed within ___ when being assigned to variables.",
    answerArray: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2,
  },
  {
    questionString:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerArray: ["JavaScript", "terminal/bash", "For loops", "console.log"],
    correctAnswer: 3,
  },
];
//Clear begin quiz screen
function clearnBeginQuiz() {
  beginPage.style.display = "none";
}

//Display the quiz and timer
function beginGame() {
  gamePage.style.display = "block";
  timerEl.style.display = "block";
}

//Click event listener... is this even doing anything????
beginButtonClick.addEventListener("click", function () {
  console.log("Begin button clicked");
  clearnBeginQuiz();
  beginGame();
  gameTimer();
  quizQuestions();
});

function gameTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left for quiz.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gamePage.style.display = "none";
      scoreSubmission();
    }
  }, 1000);
  console.log("Timer started.");
}

function quizQuestions() {
  var currentQuestion = questionsArray[currentQuestionIndex];
  questionText.textContent = currentQuestion.questionString;
  console.log(currentQuestion.questionString);
  for (var i = 0; i < currentQuestion.answerArray.length; i++) {
      console.log(currentQuestion.answerArray[i]);
      
    if (questionsArray[0].correctAnswer) {
      console.log("Correct answer");
    } else {
      console.log("Incorrect answer");
    }
  }
}

function scoreSubmission() {
  var scoreSubmissionForm = document.createElement("FORM");
  scoreSubmissionForm.setAttribute("id", "scoreForm");
  document.body.append(scoreSubmissionForm);
  var scoreFormInput = document.createElement("INPUT");
  scoreFormInput.setAttribute("type", "text");
  scoreFormInput.setAttribute("value", "Name");
  document.getElementById("scoreForm").append(scoreFormInput);
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.className = "button";
  submitButton.setAttribute("type", "input");
  submitButton.setAttribute("value", "Submit");
  submitButton.style.color = "white";
  submitButton.style.color = "purple";
  submitButton.style.width = "100px";
  submitButton.style.height = "30px";
  document.body.append(submitButton);
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked for submission");
  });
}

// event listener for clicking answers
choiceNode.addEventListener.onclick("click", function () {
  quizQuestions();
});

//FROM TUTOR!!!
// choicesEl.innerHTML = "";
// console.log(choicesEl.innerHTML);
// // Loop over questions and choices.. Gives me five boxes not four
// for(var i=0; i<questionsArray.length; i++) {
//   // create new button for each choices
//   var choiceNode = document.createElement("button");
//   choiceNode.setAttribute('style', 'background-color: purple');
//   choiceNode.style.backgroundcolor = 'purple';
//   choiceNode.style.height = '30px';
//   choiceNode.style.width = '30px';
//   choiceNode.setAttribute("class", "choice");
//   choiceNode.setAttribute("value", "choice");
//   //display on page
//   choicesEl.appendChild(choiceNode);
// };

//FROM TUTOR!!!
// function questionClick() {
//     //check is user guessed wrong
//     if (this.value !== questionsArray[currentQuestionIndex].correctAnswer) {
//       //penalize time
//       secondsLeft -= 15;
//       if (secondsLeft < 1) {

//       }

//       //display new time
//       feedbackEl.textContent = "Incorrect"
//     }
//     else{
//         feedbackEl.textContent = "That's right!"
//     }
//     currentQuestionIndex++;
//     if (currentQuestionIndex === questionsArray.length){
//         // call a fct quizEnd()
//     }
//   }

//wWhy is this so weird and down here? I can't move it because it messes everything up....
// beginButtonClick.onclick = function setTime()

// {
