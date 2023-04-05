export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //opens popup
    this._popupElement.classList.add("modal_open");
    this.setEventListeners();
  }

  close() {
    //closes popup
    this._popupElement.classList.remove("modal_open");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    //listens for escape button

    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlay(evt) {
    if (evt.target.classList.contains("modal_open")) {
      this.close();
    }
  }
  setEventListeners() {
    //sets event listeners
    this._popupElement
      .querySelector(".modal__button-close")
      .addEventListener("click", () => this.close());
    this._popupElement.addEventListener("mousedown", (evt) =>
      this._handleOverlay(evt)
    );
  }
}
