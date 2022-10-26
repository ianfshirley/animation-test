let root = document.documentElement;

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function setRandomXPosition() {
  let root = document.documentElement;
  let newFirstX = getRandomNum(400, 720);
  root.style.setProperty('--first-x-position', newFirstX + 'px');
  let newSecondX = getRandomNum(0, 320);
  root.style.setProperty('--second-x-position', newSecondX + 'px'); 
  //TODO: set the rest of the x positions
}

root.addEventListener('animationiteration', () => {
  setRandomXPosition();
});



