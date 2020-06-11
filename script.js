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
var secondsLeft = 60;
// //Buttons for answers OLD
// var questionButtonOne = document.getElementById("buttonOne");
// var questionButtonTwo = document.getElementById("buttonTwo");
// var questionButtonThree = document.getElementById("buttonThree");
// var questionButtonFour = document.getElementById("buttonFour");
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
        questionString: "The condition in an if/else statement is enclosed within ___.",
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

//On click for beginButton closes beginPage

function beginQuiz() {
    beginPage.style.display = "none";
    gamePage.style.display = "block";
    timerEl.style.display = "block";

    var currentQuestion = questionsArray[currentQuestionIndex];
    console.log(currentQuestionIndex); //logs correctly
    questionText.textContent = currentQuestion.questionString;
    console.log(currentQuestion.questionString);
    

    choicesEl.innerHTML = "";
    console.log(choicesEl.innerHTML);
    // loop overchoices
    for(var i=0; i<questionsArray.length; i++) {
      // create new button for each choices
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute('style', 'background-color: purple');
      choiceNode.style.backgroundcolor = 'purple';
      choiceNode.style.height = '30px';
      choiceNode.style.width = '30px';
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", "choice");
      // event listener
      choiceNode.onclick = questionClick;
      //display on page
      choicesEl.appendChild(choiceNode);
    };}
  
    function questionClick() {
        //check is user guessed wrong
        if (this.value !== questionsArray[currentQuestionIndex].correctAnswer) {
          //penalize time
          secondsLeft -= 15;
          if (secondsLeft < 1) {
         
          }
      
          //display new time
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
  
beginButtonClick.onclick = function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left for quiz.";

        if (secondsLeft <0 ) {
            clearInterval(timerInterval);
            sendMessage();
            scorePage.style.display = "block";
            gamePage.style.display = "none";
        }
    }, 1000);
    console.log("Timer started.");
};
function sendMessage() {
    timerEl.textContent = "Time has expired.";
    //IF time expires THEN go to score page?
    console.log("Time expired.");
}

//Click event listener
beginButtonClick.addEventListener("click", beginQuiz);
