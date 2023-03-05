import { openModal } from "./utils.js";
const picModalPreview = document.querySelector(".modal__preview-image");
const picModalText = document.querySelector(".modal__picture-description");
const picModal = document.querySelector("#picture-modal");

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _cardToggle() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handlePreviewPicture(picModal) {
    picModalPreview.src = this._link;
    picModalText.textContent = this._name;
    picModalPreview.alt = this._name;
    openModal(picModal);
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._cardToggle();
      });
    this._cardElement
      .querySelector(".card__remove")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePreviewPicture(picModal);
      });
  }
  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    console.log(this._cardElement);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardElement.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._cardElement.querySelector(".card__text").textContent = this._name;
    this._cardLike = this._cardElement.querySelector(".card__like-button");
    this._cardRemove = this._cardElement.querySelector(".card__remove");
    this._setEventListeners();

    return this._cardElement;

    //get the card view
    //set event listeners

    //return element
  }
}
