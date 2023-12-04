const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  if (textareaEl.value.includes("<script>")) {
    alert("dear, don't use that");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  // determine new numbers
  // value - very common in input
  let numberOfWords = textareaEl.value.split(" ").length;

  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }

  const numberOfCharacters = textareaEl.value.length;

  // twitter words

  const twitterCharLeft = 280 - numberOfCharacters;

  // facebook words

  const facebookCharLeft = 2200 - numberOfCharacters;

  if (twitterCharLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  // set new numbers
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharLeft;
  facebookNumberEl.textContent = twitterCharLeft;
};

textareaEl.addEventListener("input", inputHandler);
