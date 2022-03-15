// element selectors
var navBar = document.querySelector("nav");
var highScoresLink = document.getElementById("highscores-link");
var timerDisplay = document.getElementById("timer");
var container = document.getElementById("container");
var title = document.getElementById("title");
var text = document.getElementById("text");
var startQuizButton = document.getElementById("start-button");
var quizAnswers = document.getElementById("answers");
var answerChoice = document.getElementsByClassName("answer-choice");
var answerMessage = document.getElementById("answer-message");
var input = document.getElementById("input");
var initials = document.getElementById("initials");
var submitInitialsButton = document.getElementById("submit-initials-button");
var submitForm = document.getElementById("submit-form");

// states
var timer = 0;
var currentQuestion = 0;
var score = 0;
var scoreArray = [];
var timerInterval = false;

// functions

//1. startQuiz called by startQuizButton
//2. startQuiz updates timer to 75,
//hides startQuizButton
//calls countdown -> 3
//calls displayQuestion -> 4
function startQuiz() {
  timer = 75;
  timerDisplay.textContent = timer;

  countdown();

  displayQuestion();

  startQuizButton.style.display = "none";
}

//3. countdown sets timer interval to 1second
// starts decrementing the timer by 1, displays decrementing timer
function countdown() {
  timerInterval = setInterval(function () {
    timer--;
    timerDisplay.textContent = timer;
    //if timer value is less than one, display zero
    // and end the game endGame -> 7.
    // and clear the timerInterval countdown
    if (timer < 1) {
      timerDisplay.textContent = 0;
      endGame();
      clearInterval(timerInterval);
    }
    //if currentQuestion equals length of questions array, stop the timer decrementing
    if (currentQuestion === questions.length) {
      // timerDisplay.textContent = timer;
      clearInterval(timerInterval);
    }
  }, 1000);
}

//4. displayQuestion function (called by startQuiz)
function displayQuestion() {
  //styles for quiz-page
  container.className = "quiz-page p-3 mb-2 bg-light text-dark";
  //set text of question to be currentQuestion + 1
  title.textContent = "Question " + (currentQuestion + 1);
  title.setAttribute("class", "h2");
  //call the currentQuestion index's text from the questions array (questions.js file)
  text.textContent = questions[currentQuestion].title;
  text.className = "h4";
  //update text style for questions
  text.setAttribute(
    "style",
    "border-top: 1px double #adb5bd; padding-top: 2rem;"
  );
  //display the quizAnswers
  //update answers div to display answer choices called from questions array
  quizAnswers.style.display = "block";

  answerChoice[0].textContent = "1. " + questions[currentQuestion].choices[0];
  answerChoice[1].textContent = "2. " + questions[currentQuestion].choices[1];
  answerChoice[2].textContent = "3. " + questions[currentQuestion].choices[2];
  answerChoice[3].textContent = "4. " + questions[currentQuestion].choices[3];
  //add event listener to each answerChoice.
  //when an answerChoice text is clicked, call checkAnswer -> 5.
  for (i = 0; i < answerChoice.length; i++) {
    answerChoice[i].addEventListener("click", checkAnswer);
  }
}

//5. checkAnswer (called by displayQuestion)
//pass answerChoice click event to checkAnswer function
function checkAnswer(event) {
  //if the clicked answerChoice equals the answer text in the questions array
  if (event.target.textContent === questions[currentQuestion].answer) {
    //display the answer-message-correct message
    answerMessage.style.display = "block";
    answerMessage.textContent = "Correct!";
    answerMessage.className = "answer-message-correct";
    //add one to currentQuestion variable
    currentQuestion++;
    //add one to the score
    score++;
    //hide the correct answer message after 1 second
    setTimeout(function () {
      answerMessage.style.display = "none";
    }, 1000);
    //if currentQuestion = questions.length, endGame -> 6.
    if (currentQuestion === questions.length) {
      endGame();
      //else continue to displayQuestion -> 4.
    } else {
      displayQuestion();
    }
    //else the answer is incorrect, so
  } else {
    //display the answer-message-incorrect message
    answerMessage.style.display = "block";
    answerMessage.textContent = "Incorrect!";
    answerMessage.className = "answer-message-incorrect";
    //add one to currentQuestion variable
    currentQuestion++;
    //hide the incorrect answer message after 1 second
    setTimeout(function () {
      answerMessage.style.display = "none";
    }, 1000);
    //if timer is less than 10, subtract 10 then endGame -> 6.
    if (timer < 10) {
      timer -= 10;
      // timer === 0;
      endGame();
      // else if currentQuestion is the last question then endGame -> 6.
      // } else if currentQuestion >= 14) {
    } else if (currentQuestion === questions.length) {
      endGame();
    } else {
      //else reduce timer by 10 and go to displayQuestion -> 4.
      timer -= 10;
      displayQuestion();
    }
  }
}

//6. function endGame - display the results page with score and message
function endGame() {
  //hide the quizAnswers display
  quizAnswers.style.display = "none";
  //styles for result display
  container.className = "results-page p-3 mb-2 bg-light text-dark";
  title.setAttribute("class", "h2");
  text.setAttribute("style", "border-top: 0");
  text.removeAttribute("class");
  //display score variable
  text.textContent = `Your final score is ${score}.`;
  input.style.display = "block";

  if (timer <= 0) {
    //if the timer is 0 or less, set timer to 0 and display out of time message
    timer === 0;
    title.textContent = "You ran out of time!";
  } else {
    //if timer is > 0 display all done message
    title.textContent = "All done!";
  }
  // click on Submit button to store score
  // then call storeScore function -> 7.
  // submitInitialsButton.addEventListener("click", storeScore);

  submitForm.addEventListener("submit", storeScore) 

}

//7. storeScore
// save the scores locally, and order from highest to lowest score
// trigger storeScore from submitInitialsButton click event
function storeScore(event) {
  //prevent submitting button from refreshing page
  event.preventDefault();

  //test for text being entered into the input
  if (initials.value.length === 0) {
    return;
  } else {
    //if there is input text, add user's initials input to the score variable as an instance of userScore object
    var userScore = {
      userName: initials.value.trim(),
      userScore: score,
    };
    //add userScore object instance to scoreArray
    scoreArray.push(userScore);
    //use compare function to sort scoreArray in descending userScores
    scoreArray.sort((a, b) => b.userScore - a.userScore);
    //save updated scoreArray in local storage
    localStorage.setItem("score", JSON.stringify(scoreArray));

    openHighScores();
  }
}

// 8. openHighScores
//called after initials and scores are saved locally
//OR by clicking High Scores link
function openHighScores() {
  // clear the timer decrimenting
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  //set up score-page for display
  container.className = "score-page p-3 mb-2 bg-light text-dark";
  var ul = document.createElement("ul");
  //"Go Back" button
  var goBackButton = document.createElement("button");
  goBackButton.setAttribute("class", "btn btn-primary btn-lg custom-btn-primary");
  goBackButton.textContent = "Go Back";
  //"Clear High Scores" button
  var clearHighScoresButton = document.createElement("button");
  clearHighScoresButton.setAttribute("class", "btn btn-primary btn-lg custom-btn-primary");
  clearHighScoresButton.textContent = "Clear High Scores";
  //append elements to the container
  container.appendChild(ul);
  container.appendChild(goBackButton);
  container.appendChild(clearHighScoresButton);
  //hide startQuizButton
  startQuizButton.style.display = "none";
  //hide navbar
  navBar.style.visibility = "hidden";
  //title and content display
  title.textContent = "High Scores";
  text.textContent = "";
  text.setAttribute("style", "border-top: 0");
  //hide quiz answers
  quizAnswers.style.display = "none";
  input.style.display = "none";

  //loop through score array to create score string to display
  for (i = 0; i < scoreArray.length; i++) {
    var scoreText =
      "Initials: " +
      scoreArray[i].userName +
      " - Score: " +
      scoreArray[i].userScore;

    //add string to li, append li to the ul
    li = document.createElement("li");
    li.textContent = scoreText;
    ul.appendChild(li);
  }
  //clicking "Go Back", refreshes index.html to open
  goBackButton.addEventListener("click", function () {
    location.href = "index.html";
  });
  //clicking "Clear High Scores", clears local storage and displays ul with no content
  clearHighScoresButton.addEventListener("click", function () {
    localStorage.clear();
    ul.innerHTML = "";
  });
}

//1.b loadHighScore
//load locally saved high scores into scoreArray when user opens/refreshes index page - ready to add to from quiz game
function loadHighScore() {
  //use JSON to call and parse score stored locally
  //"score" is updated and saved locally by 7. storeScore
  var storedScores = JSON.parse(localStorage.getItem("score"));

  //if there are locally stored scores, assign storedScores to scoreArray
  if (storedScores !== null) {
    scoreArray = storedScores;

    return scoreArray;
  }
}

// load / refresh page or initiate by clicking link / button

//1.a. loadHighScore is called when index.html refreshed/opened -> 1.b
loadHighScore();

//clicking highScoresLink -> go to openHighScores -> 8.
highScoresLink.addEventListener("click", openHighScores);

//1. Clicking startQuizButton ("Start Quiz") triggers startQuiz function -> 2.
startQuizButton.addEventListener("click", startQuiz);
