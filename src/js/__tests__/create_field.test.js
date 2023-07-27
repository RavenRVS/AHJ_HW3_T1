import createField from "../create_field";

describe("createField", () => {
  let container;
  let gameContainer;

  beforeEach(() => {
    // Создаем фейковый контейнер и вставляем его в document.body
    container = document.createElement("div");
    gameContainer = document.createElement("div");
    gameContainer.classList.add("field-container");
    container.appendChild(gameContainer);
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Удаляем фейковый контейнер из document.body после каждого теста
    document.body.removeChild(container);
  });

  it("should add cells to the game container", () => {
    const width = 3;
    createField(container, width);

    const cells = container.querySelectorAll(".cell");
    expect(cells.length).toBe(width * width);
  });

  it("should set the correct IDs for each cell", () => {
    const width = 4;
    createField(container, width);

    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      expect(cell.getAttribute("id")).toBe(String(index));
    });
  });
});
