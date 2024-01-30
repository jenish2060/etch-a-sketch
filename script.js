const container = document.querySelector(".container");
const pickColor = document.querySelector("#color");
const pickRange = document.querySelector("#range");
const rangeText = document.querySelector(".range-text");
const clearBtn = document.querySelector("#clear-button");
const eraserBtn = document.querySelector("#eraser-button");
const colorBtn = document.querySelector("#set-color");
const rainbowBtn = document.querySelector("#rainbow-color");
const shadowBtn = document.querySelector("#shadow-button");

let eraserBtnClicked = false;
let rainbowBtnClicked = false;
let shadowBtnClicked = false;

let totalBlocks = Math.pow(pickRange.value, 2);
createBoard();

function getColorCode() {
  let red = parseInt(pickColor.value.substring(1, 3), 16);
  let green = parseInt(pickColor.value.substring(3, 5), 16);
  let blue = parseInt(pickColor.value.substring(5, 7), 16);
  return [red, green, blue];
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function createBoard() {
  container.innerHTML = "";
  for (let i = 0; i < totalBlocks; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = `calc(100% / ${pickRange.value})`;
    block.style.height = `calc(100% / ${pickRange.value})`;
    container.appendChild(block);
  }
}

function handleDrawing(e) {
  const colorCode = getColorCode();
  if (eraserBtnClicked && e.buttons === 1) {
    e.target.style.backgroundColor = "white";
  } else if (rainbowBtnClicked && e.buttons === 1) {
    e.target.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
  } else if (shadowBtnClicked && e.buttons === 1) {
    e.target.style.backgroundColor = `rgba(${colorCode[0]},${colorCode[1]},${colorCode[2]},0.2)`;
  } else if (e.buttons === 1) {
    e.target.style.backgroundColor = `rgb(${colorCode[0]},${colorCode[1]},${colorCode[2]})`;
  }
}

function deactivateButtons() {
  const buttons = [eraserBtn, rainbowBtn, shadowBtn, colorBtn];
  buttons.forEach(button => button.classList.remove("buttonClicked"));
  eraserBtnClicked = false;
  rainbowBtnClicked = false;
  shadowBtnClicked = false;
}

colorBtn.addEventListener("click", () => {
  deactivateButtons();
  colorBtn.classList.add("buttonClicked");
});

rainbowBtn.addEventListener("click", () => {
  deactivateButtons();
  rainbowBtn.classList.add("buttonClicked");
  rainbowBtnClicked = !rainbowBtnClicked;
});

eraserBtn.addEventListener("click", () => {
  deactivateButtons();
  eraserBtn.classList.add("buttonClicked");
  eraserBtnClicked = !eraserBtnClicked;
});

shadowBtn.addEventListener("click", () => {
  deactivateButtons();
  shadowBtn.classList.add("buttonClicked");
  shadowBtnClicked = !shadowBtnClicked;
});

clearBtn.addEventListener("click", () => {
  const block = document.querySelectorAll(".block");
  for (let index = 0; index < block.length; index++)
    block[index].style.backgroundColor = "white";
});

pickRange.addEventListener("input", () => {
  rangeText.textContent = `${pickRange.value} x ${pickRange.value}`;
  totalBlocks = Math.pow(pickRange.value, 2);
  createBoard();
});

// Resolve mouseover miss fire
container.ondragstart = function () {
  return false;
};

container.addEventListener("mouseover", handleDrawing);