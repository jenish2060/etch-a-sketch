const container = document.querySelector(".container");
const pickColor = document.querySelector("#color");
const pickRange = document.querySelector("#range");
const rangeText = document.querySelector(".range-text");

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
  if(e.buttons === 1){
    e.target.style.backgroundColor = pickColor.value;
  }
});
