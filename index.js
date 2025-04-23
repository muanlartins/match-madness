Array.prototype.getRandomOrder = function getRandomOrder() {
  return this.sort(() => Math.random() - 0.5);
};

function fillList(list) {
  const randomElements = elements.getRandomOrder();
  list.forEach((li, i) => (li.innerHTML = randomElements[i]));
}

function checkMatch() {
  if (!pressedLeftItem || !pressedRightItem) return;

  if (pressedLeftItem.textContent === pressedRightItem.textContent) {
    handleCorrectMatch();
  } else {
    handleWrongMatch();
  }

  pressedLeftItem = undefined;
  pressedRightItem = undefined;
}

function handleCorrectMatch() {
  pressedLeftItem.classList.add("correct");
  pressedRightItem.classList.add("correct");

  pressedLeftItem.classList.remove("pressed");
  pressedRightItem.classList.remove("pressed");
}

function handleWrongMatch() {
  pressedLeftItem.classList.remove("pressed");
  pressedRightItem.classList.remove("pressed");

  pressedLeftItem.classList.remove("wrong");
  pressedRightItem.classList.remove("wrong");

  void pressedLeftItem.offsetWidth;
  void pressedRightItem.offsetWidth;

  pressedLeftItem.classList.add("wrong");
  pressedRightItem.classList.add("wrong");
}

const lists = document.querySelectorAll("li");
const left = [...lists].slice(0, 5);
const right = [...lists].slice(5);

const elements = ["A", "B", "C", "D", "E"];

fillList(left);
fillList(right);

let pressedLeftItem;
let pressedRightItem;

[...document.querySelectorAll("li")].forEach((li, i) => {
  li.addEventListener("mousedown", () => {
    li.classList.add("pressed");

    const isLeftItem = i < 5;
    if (isLeftItem) {
      pressedLeftItem = li;
    } else {
      pressedRightItem = li;
    }

    checkMatch();
  });
});
