import { openModal } from "./utils.js";
const picModalPreview = document.querySelector(".modal__preview-image");
const picModalText = document.querySelector(".modal__picture-description");
const picModal = document.querySelector("#picture-modal");

export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _handleLikeButton() {
    this._cardLike.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handlePreviewPicture(picModal) {
    picModalPreview.src = this._link;
    picModalText.textContent = this._name;
    picModalPreview.alt = this._name;
    openModal(picModal);
  }

  _setEventListeners() {
    this._cardLike.addEventListener("click", () => {
      this._handleLikeButton();
    });
    this._cardRemove.addEventListener("click", () => {
      this._handleDeleteButton();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.style.backgroundImage = `url(${this._link})`;
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

/*
Original _setEventListeners
 _setEventListeners() {
    this._cardLike.addEventListener("click", () => {
      this._handleLikeButton();
    });
    this._cardRemove.addEventListener("click", () => {
      this._handleDeleteButton();
    });
    this._cardImage.addEventListener("click", () => {
      this._handlePreviewPicture(picModal);
    });
  }
  */
