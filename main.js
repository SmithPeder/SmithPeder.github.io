let questionDiv = document.getElementById("questionDiv");
let nextButton = document.getElementById("nextButton");
let questionNum = 0;
let right = 0;
let wrong = 0;
let asked = [];
let scoresDiv = document.getElementById("scoresDiv");

//Init
window.onload = function() {
  printQuestion();
};

//Get random between
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Print new question
function printQuestion() {
  qNum = chooseQuestion();
  questionNum = qNum;
  questionDiv.innerHTML = "<h3>" + questions[qNum].question + "</h3>";
  createButtonAndAppend("button", questions[qNum].answer1, questionDiv, 1);
  createButtonAndAppend("button", questions[qNum].answer2, questionDiv, 2);
  createButtonAndAppend("button", questions[qNum].answer3, questionDiv, 3);
  createButtonAndAppend("button", questions[qNum].answer4, questionDiv, 4);
}

//Generate new question
function chooseQuestion() {
  //Reset if all questions are asked
  if (asked.length == 3) {
    asked = [];
  }
  //Get random question
  let qNum = randBetween(0, questions.length);
  //Make sure the question is not asked before
  if (asked.indexOf(qNum) != -1) {
    return chooseQuestion();
  }
  asked.push(qNum);
  return qNum;
}

//Create new button
function createButtonAndAppend(type, text, parent, onclick) {
  let newElement = document.createElement(type);
  newElement.innerHTML = text;
  newElement.setAttribute("onclick", "chooseAnswer(this," + onclick + ")");
  parent.appendChild(newElement);
}

//Create a new textelement and replace content
function createAndReplace(type, text, parent) {
  parent.innerHTML = "";
  let newTextNode = document.createTextNode(text);
  let newElement = document.createElement(type);
  newElement.appendChild(newTextNode);
  parent.appendChild(newElement);
}

//Choose answer based on user guess
function chooseAnswer(self, answer) {
  //Correct
  if (answer == questions[questionNum].correctAnswer) {
    self.style.background = "#1EBC61"; //Green
    right++;
  } else {
    //Wrong
    self.style.background = "#F75C4C"; //Red
    wrong++;
    questionDiv.getElementsByTagName("button")[
      questions[questionNum].correctAnswer - 1
    ].style.background =
      "#aed581";
  }
  //Make all buttons have no onClick events
  for (i = 0; i < questionDiv.getElementsByTagName("button").length; i++) {
    questionDiv.getElementsByTagName("button")[i].style.pointerEvents = "none";
  }
  updateScores();
}

//Next question
nextButton.onclick = function() {
  updateScores();
  printQuestion();
};

//Get new scores
function updateScores() {
  //Calculate score
  let scorePercent = Math.round(100 * (right - wrong) / asked.length, 2);
  //Get stats
  scoresDiv.getElementsByTagName("span")[0].innerHTML = right;
  scoresDiv.getElementsByTagName("span")[1].innerHTML = wrong;
  scoresDiv.getElementsByTagName("span")[2].innerHTML =
    right - 0.5 * wrong + "/" + asked.length + "(" + scorePercent + "%)";
  scoresDiv.getElementsByTagName("span")[3].innerHTML =
    right + wrong + " av " + questions.length;
}
