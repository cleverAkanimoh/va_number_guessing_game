"use strict";

var _elements = require("./elements.js");

var displayHint = function displayHint(txt) {
  _elements.hint.innerText = txt;
  _elements.hint.className = 'display';
  setTimeout(function () {
    _elements.hint.innerText = '';
    _elements.hint.className = '';
  }, 5000);
};

_elements.startBtn.onclick = function () {
  return displayHint('choose a difficulty level before game can start');
}; // to select levels


var gameMode;
var randomNumber;
var lives;

var selectLevel = function selectLevel(e) {
  _elements.levelBtn.forEach(function (btn) {
    btn.classList.remove('active');
    gameMode = '';
  });

  var target = e.target;
  gameMode = target.innerText;
  setTimeout(function () {
    return target.classList.add('active');
  }, 50); // start game button

  _elements.startBtn.onclick = startGame;
};

_elements.levelBtn.forEach(function (btn) {
  return btn.onclick = selectLevel;
}); // starting the game


var startGame = function startGame() {
  _elements.startingPage.className = 'none';
  _elements.middlePage.className = 'show';

  switch (gameMode) {
    case 'Easy':
      GameModeFunc(3, 10);
      break;

    case 'Medium':
      GameModeFunc(5, 50);
      break;

    case 'Hard':
      GameModeFunc(7, 100);
      break;

    default:
      console.log('Invalid mode selected');
  }
};

var GameModeFunc = function GameModeFunc(life, rand) {
  _elements.header.innerHTML = "\n        <span id=\"minGuess\">min guess = 0</span>\n        <span id=\"maxGuess\">max guess = ".concat(rand, "</span>\n    ");
  randomNumber = Number(Math.floor(Math.random() * rand));
  lives = life;
  _elements.livesLeft.innerText = "lives left: ".concat(lives);
  _elements.guessBtn.onclick = GuessFunc;
};

var GuessFunc = function GuessFunc() {
  var value = Number(_elements.input.value);
  lives--;
  _elements.livesLeft.innerText = "lives left: ".concat(lives);

  if (value === randomNumber) {
    // print winner
    displayResult('congratulations', 'won');
  } else if (lives === 0) {
    // print loser
    displayResult('sorry', 'lost');
  } else if (value > randomNumber) {
    // when value is greater than random number
    displayHint('Enter a lesser number');
  } else if (value < randomNumber) {
    // when value is lesser than random number
    displayHint('Enter a greater number');
  }
};

var displayResult = function displayResult(txt, result) {
  _elements.middlePage.className = 'none';
  _elements.lastPage.className = 'show';
  _elements.lastPage.innerHTML = "\n\t\t\t<h2>".concat(txt, "</h2>\n            <p id=\"resultText\">you ").concat(result, "</p>\n            <samp>").concat(lives, " lives left</samp>\n\t\t\t<button id=\"againBtn\">play again</button>\n\t\t");
  var playAgainBtn = document.getElementById('againBtn');

  playAgainBtn.onclick = function () {
    return window.location.reload();
  };
}; // const inputChange = () => {
// 	let value = input.value;
// 	console.log(value);
// 	if(value === "") {
// 		value = 1;
// 	}
// 	if (value > 100) {
// 		value = 100;
// 	}
// 	if (value < 0) {
// 		value = 0;
// 	}
// };
// input.oninput = inputChange;