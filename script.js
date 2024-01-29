const container = document.querySelector(".container");
const pickColor = document.querySelector("#color");
const pickRange = document.querySelector("#range");
const rangeText = document.querySelector(".range-text");
const clearBtn = document.querySelector("#clear-button");
const eraserBtn = document.querySelector("#eraser-button");
const colorBtn = document.querySelector("#set-color");


let eraserBtnClicked = false;
let totalBlocks = Math.pow(pickRange.value, 2);
createBoard();

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

container.addEventListener("mouseover", (e) => {
  handleDrawing(e);
});

function handleDrawing(e) {
  if (eraserBtnClicked) {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = "white";
    }
  } else {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = pickColor.value;
    }
  }
}

eraserBtn.addEventListener("click", () => {
  eraserBtn.classList.toggle('buttonClicked');
  eraserBtnClicked = !eraserBtnClicked;
});

clearBtn.addEventListener('click', () => {
  clearBtn.classList.toggle('buttonClicked');
  const block = document.querySelectorAll(".block");
  for(let index = 0 ; index < block.length ; index++)
      block[index].style.backgroundColor = "white";
});
