const container = document.querySelector(".container");

for(let i=0; i<16; i++){
    const block = document.createElement("div");
    container.appendChild(block);
    block.classList.add("block");
}