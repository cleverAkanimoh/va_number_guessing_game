import get from './getElements.js';

const levelBtn = document.querySelectorAll('.btn');

// starting page
const startBtn = get('#startBtn');
const startingPage = get('#startingPage');

// middlepage
const header = get('header');
const input = get('#guessInput input');
const guessBtn = get('#guessBtn');
const hint = get('#hint');
const livesLeft = get('samp');
const middlePage = get('#middlePage');

// last page
const lastPage = get('#lastPage');

export { levelBtn, livesLeft, startBtn, startingPage, header, input, hint, guessBtn, middlePage, lastPage };