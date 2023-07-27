import createField from "./create_field";
import GoblinGame from "./goblin_game";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  createField(container, 4);
  const goblinGame = new GoblinGame(container);
});
