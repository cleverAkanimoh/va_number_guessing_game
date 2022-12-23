import { levelBtn, livesLeft, startBtn, startingPage, header, input, hint, guessBtn, middlePage, lastPage } from './elements.js';


const displayHint = (txt) => {
	hint.innerText = txt;
	hint.className = 'display';
	setTimeout(() => {
		hint.innerText = '';
		hint.className = '';
	}, 5000)
};

startBtn.onclick = () => displayHint('choose a difficulty level before game can start');

// to select levels

var gameMode;
var randomNumber;
var lives;

const selectLevel = e => {

	levelBtn.forEach(btn => {
		btn.classList.remove('active');
		gameMode = '';
	});

	let target = e.target;
	gameMode = target.innerText;

	setTimeout(() => target.classList.add('active'), 50);

	// start game button

	startBtn.onclick = startGame;
};

levelBtn.forEach(btn => btn.onclick = selectLevel);

// starting the game

const startGame = () => {
	startingPage.className = 'none';
	middlePage.className = 'show';

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

const GameModeFunc = (life, rand) => {
	header.innerHTML = `
        <span id="minGuess">min guess = 0</span>
        <span id="maxGuess">max guess = ${rand}</span>
    `;
	randomNumber = Number(Math.floor(Math.random() * rand));

	lives = life;
	livesLeft.innerText = `lives left: ${lives}`;

	guessBtn.onclick = GuessFunc;
};

const GuessFunc = () => {
	
	let value = Number(input.value);

	lives--;
	livesLeft.innerText = `lives left: ${lives}`;

	if (value === randomNumber) {
		// print winner
		displayResult('congratulations', 'won')
	} else if (lives === 0) {
		// print loser
		displayResult('sorry', 'lost');
	} else if ( value > randomNumber ) {
		// when value is greater than random number
		displayHint('Enter a lesser number');
	} else if ( value < randomNumber ) {
		// when value is lesser than random number
		displayHint('Enter a greater number');
	}
};

const displayResult = (txt, result) => {
	middlePage.className = 'none';
	lastPage.className = 'show';
	lastPage.innerHTML = `
			<h2>${txt}</h2>
            <p id="resultText">you ${result}</p>
            <samp>${lives} lives left</samp>
			<button id="againBtn">play again</button>
		`;
	const playAgainBtn = document.getElementById('againBtn');

	playAgainBtn.onclick = () => window.location.reload();
};

// const inputChange = () => {
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