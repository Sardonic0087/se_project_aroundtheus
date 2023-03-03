export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _handleLikeButton() {
    this._cardElementlement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _cardToggle() {
    this._cardElement.classList.toggle("card__like-button_active");
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
      .addEventListener("click", function () {
        this._picModalPreview.src = data.link;
        this._picModalText.textContent = data.name;
        this._picModalPreview.alt = data.name;
        openModal(this._picModal);
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
    this._setEventListeners();
    //return element
  }
}
