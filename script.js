const container = document.querySelector(".container");
const block = document.createElement("div");

for(let i=0; i<16; i++){
    container.appendChild(block.cloneNode(true));
}