const container = document.querySelector(".container");

totalBlocks = 256;

for(let i=0; i<totalBlocks; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = `calc(100% / 16)`;
    block.style.height = `calc(100% / 16)`;
    container.appendChild(block);
}
