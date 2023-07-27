export default class GoblinGame {
  constructor(container) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    this._containerField = container.querySelector(".field-container");
    this._goodHitCounter = 0;
    this._looseCounter = 0;
    this.interval = 1000;
    this._cellList = this._containerField.querySelectorAll(".cell");
    this._goodHitCounterElement = container.querySelector(
      ".tablo-container__win-counter"
    );
    this._looseCounterElement = container.querySelector(
      ".tablo-container__loose-counter"
    );
    this._goblinFace = document.createElement("div");
    this._moveFace();
    this._runTimer();
    this._containerField.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        this._goodHit();
      }
    });
  }

  _showFace() {
    this._goblinFace.classList.add("active");
  }

  _hideFace() {
    this._goblinFace.classList.remove("active");
  }

  _moveFace() {
    let index = Math.floor(Math.random() * (this._cellList.length - 1));
    if (this._goblinFace.closest(".cell") === this._cellList[index]) {
      index += 1;
      if (index >= this._cellList.length) {
        index = 0;
      }
    }
    this._cellList[index].appendChild(this._goblinFace);
    this._showFace();
  }

  _runTimer() {
    this.timer = setTimeout(() => {
      this._looseFace();
    }, this.interval);
  }

  _stopTimer() {
    clearInterval(this.timer);
  }

  _goodHit() {
    this._stopTimer();
    this._goodHitCounter += 1;
    this._hideFace();
    setTimeout(() => {
      this._moveFace();
      this._runTimer();
    }, 300);
    this._showResult(this._goodHitCounter, this._goodHitCounterElement);
  }

  _looseFace() {
    this._moveFace();
    this._looseCounter += 1;
    if (this._looseCounter > 4) {
      this._showResult(this._looseCounter, this._looseCounterElement);
      this._endGame();
    } else {
      this._showResult(this._looseCounter, this._looseCounterElement);
      this._runTimer();
    }
  }

  _showResult(result, element) {
    element.textContent = result;
  }

  _endGame() {
    alert("Вы проиграли...");
    this._goodHitCounter = 0;
    this._looseCounter = 0;
    this._moveFace();
    this._showResult(this._looseCounter, this._looseCounterElement);
    this._showResult(this._goodHitCounter, this._goodHitCounterElement);
    this._runTimer();
  }
}
