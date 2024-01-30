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
  return { red, green, blue };
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

function updateRangeText() {
  rangeText.textContent = `${pickRange.value} x ${pickRange.value}`;
}

function updateBlocks() {
  totalBlocks = Math.pow(pickRange.value, 2);
}

pickRange.addEventListener("input", () => {
  updateRangeText();
  updateBlocks();
  createBoard();
});

container.ondragstart = function () {
  return false;
};

container.addEventListener("mouseover", (e) => {
  handleDrawing(e);
});

function handleDrawing(e) {
  let colorCode = getColorCode();
  console.log(colorCode);
  if (eraserBtnClicked) {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = "white";
    }
  } else if (rainbowBtnClicked) {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = `rgb(${+generateRandomNumber()}, ${+generateRandomNumber()}, ${+generateRandomNumber()})`;
    }
  } else if (shadowBtnClicked) {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = `rgba(${colorCode.red},${colorCode.green},${colorCode.blue},0.2)`;
    }
  } else {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = `rgb(${colorCode.red},${colorCode.green},${colorCode.blue})`;
    }
  }
}

eraserBtn.addEventListener("click", () => {
  eraserBtn.classList.toggle("buttonClicked");
  eraserBtnClicked = !eraserBtnClicked;
});

clearBtn.addEventListener("click", () => {
  const block = document.querySelectorAll(".block");
  for (let index = 0; index < block.length; index++)
    block[index].style.backgroundColor = "white";
});

rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.toggle("buttonClicked");
  rainbowBtnClicked = !rainbowBtnClicked;
});

shadowBtn.addEventListener("click", () => {
  shadowBtn.classList.toggle("buttonClicked");
  shadowBtnClicked = !shadowBtnClicked;
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}
