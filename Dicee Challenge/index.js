let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let players = document.querySelector('h1');
let images = document.querySelectorAll('img');

if (randomNumber1 > randomNumber2) {
  players.innerHTML = '🎉Player 1 Wins';
} else if (randomNumber1 === randomNumber2) {
  players.innerHTML = 'Draw';
} else {
  players.innerHTML = 'Player 2 Wins🎉';
}

images[0].setAttribute('src', `images/dice${randomNumber1}.png`);

images[1].setAttribute('src', `images/dice${randomNumber2}.png`);
