class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._cardToggle());
    this._cardRemove.addEventListener("click", this._removeElement);
    this._cardImage.addEventListener("click", function () {
      this._picModalPreview.src = data.link;
      this._picModalText.textContent = data.name;
      this._picModalPreview.alt = data.name;
      openModal(this._picModal);
    });
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _cardToggle() {
    this._element.classList.toggle("card__like-button_active");
  }

  _removeElement() {
    this._element.remove();
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  renderCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__text").textContent = this._name;
    this._cardLike = this._element.querySelector(".card__like-button");
    this._cardRemove = this._element.querySelector(".card__remove");
    this._setEventListeners();

    return this._element;
  }
}

export default Card;
