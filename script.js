//Activity 12 for high score input help
// 1. Click start quiz 
// 2. Question and choices, make Selection
// 3. Next question and choices, make Selection (10 times?)
// 4. Score shown, with input boxes for name 
// 5. Submit button 
// 6. High score list shows with that name

//Quiz timer
var timerEl = document.querySelector(".time");
var buzzerEl = document.getElementById("buzzer");
var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left for quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
  console.log("Timer started.");
}
function sendMessage() {
  timerEl.textContent = "Time has expired.";
  console.log("Time expired.");
}
setTime(); 