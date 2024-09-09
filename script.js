'use strict';

// Generate secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

// Element
const checkEl = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const againEl = document.querySelector('.again');

const displayMessage = function (message) {
  messageEl.textContent = message;
};

// Check botton addEventListener
checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  if (!guess) {
    // If the input value is invalid
    displayMessage('⛔️ No number!');
  } else if (score > 0) {
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      numberEl.textContent = secretNumber;
      numberEl.style.width = '30rem';
      bodyEl.style.background = '#60b347';
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess < secretNumber ? 'Too low!' : 'Too high!');
      score--;
      scoreEl.textContent = score;
      if (score === 0) {
        displayMessage('💥 You lost the game!');
      }
    }
  }
});

// Again button add event listener
againEl.addEventListener('click', function () {
  score = 20;
  scoreEl.textContent = score;
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  guessEl.value = '';
  bodyEl.style.background = '#222';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
});
