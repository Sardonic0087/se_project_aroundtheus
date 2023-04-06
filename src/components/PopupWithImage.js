import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupDesc = this._popupElement.querySelector(
      ".modal__picture-description"
    );
    this._popupImage = this._popupElement.querySelector(
      ".modal__preview-image"
    );
  }
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupDesc.textContent = name;
    super.open();
  }
}
