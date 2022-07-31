let selectBtn = document.querySelectorAll('.drum');

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    play(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);
  });
}
document.addEventListener('keydown', function (event) {
  play(event.key);
  btnAnimation(event.key);
});

function play(key) {
  switch (key) {
    case 'k':
      new Audio('./sounds/crash.mp3').play();
      break;
    case 'l':
      new Audio('./sounds/kick-bass.mp3').play();
      break;
    case 'j':
      new Audio('./sounds/snare.mp3').play();
      break;
    case 'w':
      new Audio('./sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('./sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('./sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('./sounds/tom-4.mp3').play();
      break;
    default:
      break;
  }
}

function btnAnimation(currentKey) {
  var activeBtn = document.querySelector(`.${currentKey}`);
  activeBtn.classList.add('pressed');
  setTimeout(function () {
    activeBtn.classList.remove('pressed');
  }, 100);
}
