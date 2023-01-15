const wordsList = [
  "sunday",
  "wallpaper",
  "messages",
  "puzzle",
  "children",
  "sentence",
  "mountain",
  "letter",
  "cinema",
  "friend",
  "example",
  "number",
  "question",
  "picture",
  "insurance",
  "organization",
  "photographer",
];

const word = document.querySelector(".word");
let currentLetters;
let currentPosition;
let maxPosition;

addEventListener("load", function () {
  addWord();
});

addEventListener("keydown", function (event) {
  const pressedKey = event.key;
  const currentSpan = document.querySelector("#letter" + currentPosition);
  if (currentLetters[currentPosition] != pressedKey) {
    currentSpan.classList.add("w");
  } else {
    currentSpan.classList.remove("w");
    currentSpan.classList.add("c");
    currentPosition++;
    if (currentPosition > maxPosition) {
      addWord();
    }
  }
});

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomWord() {
  const randomNumber = generateRandomInt(0, wordsList.length - 1);
  return wordsList[randomNumber];
}

function addWord() {
  word.innerHTML = "";
  const fragment = new DocumentFragment();
  currentLetters = getRandomWord().slice("");

  for (let i = 0; i < currentLetters.length; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = currentLetters[i];
    letterSpan.setAttribute("id", "letter" + i);
    fragment.appendChild(letterSpan);
  }

  word.appendChild(fragment);
  currentPosition = 0;
  maxPosition = currentLetters.length - 1;
}
