'use strict';

// Generate secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

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

// Check botton addEventListner
checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  if (!guess) {
    // If the input value is invalid
    messageEl.textContent = '⛔️ No number!';
  } else if (score > 0) {
    if (guess === secretNumber) {
      messageEl.textContent = '🎉 Correct Number!';
      numberEl.textContent = secretNumber;
      numberEl.style.width = '30rem';
      bodyEl.style.background = '#60b347';
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }
    } else if (guess < secretNumber) {
      messageEl.textContent = 'Too low!';
      score--;
      scoreEl.textContent = score;
      console.log(score);
      if (score === 0) {
        messageEl.textContent = '💥 You lost the game!';
      }
    } else if (guess > secretNumber) {
      messageEl.textContent = 'Too high!';
      score--;
      scoreEl.textContent = score;
      console.log(score);
      if (score === 0) {
        messageEl.textContent = '💥 You lost the game!';
      }
    }
  } else {
    messageEl.textContent = '💥 You lost the game!';
  }
});
