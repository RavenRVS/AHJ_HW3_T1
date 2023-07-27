export default function createField(container, width) {
  const gameContainer = container.querySelector(".field-container");
  for (let i = 0; i < width * width; i += 1) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", i);

    gameContainer.appendChild(cell);
  }
}
