import "../pages/index.css";
import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import {
  closeModalByEscape,
  closeModalOnOutsideClick,
  openModal,
  closeModal,
} from "./utils.js";
import FormValidator from "./FormValidator.js";
const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
];

const data = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

const cardsList = document.querySelector(".cards__list");
const closeModals = document.querySelectorAll(".modal__button-close");
const editProfileModal = document.querySelector("#edit-modal");
const addModal = document.querySelector("#add-modal");
const editProfileModalButton = document.querySelector(".profile__edit-button");
const addProfileModalButton = document.querySelector(".profile__add-button");
const modals = document.querySelectorAll(".modal");
const profileModalForm = editProfileModal.querySelector(".modal__form");
const profileModalInputName =
  profileModalForm.querySelector(".modal__input_name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileModalInputDescription = profileModalForm.querySelector(
  ".modal__input_description"
);
const addModalForm = addModal.querySelector(".modal__form");

//FormValidator
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(config, profileModalForm);

const addFormValidator = new FormValidator(config, addModalForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
//------------------------------------------------------------------------------

closeModals.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

modals.forEach((modal) => {
  modal.addEventListener("mousedown", closeModalOnOutsideClick);
});

function fillProfileForm() {
  profileModalInputName.value = profileTitle.textContent;
  profileModalInputDescription.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openModal(editProfileModal);
  editFormValidator.resetValidation();
}

function openAddProfileModal() {
  openModal(addModal);
}

editProfileModalButton.addEventListener("click", openEditProfileModal);

addProfileModalButton.addEventListener("click", openAddProfileModal);

profileModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = descriptionValue;
  closeModal(editProfileModal);
});

addModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTitle = evt.target.title.value;
  const cardLink = evt.target.link.value;

  renderCard({ name: cardTitle, link: cardLink }, cardsList);
  evt.target.reset();

  closeModal(addModal);

  addFormValidator.toggleButtonState();
});
function createCard(data) {
  const card = new Card(data, "#card-template");

  return card.getView();
}

function renderCard(data, cardsList) {
  const card = createCard(data);

  cardsList.prepend(card);
}

initialCards.forEach(function (data) {
  renderCard(data, cardsList);
});

/*
Universal validators
implement later

const formValidators = {}

 enable validation
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config)
    // here you get the name of the form
    const formName = formElement.getAttribute('name')

    //here you store a validator by the `name` of the form
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(config);
---------------------------------
use to disable buttons and clear errors
---------------------------------------
formValidators[ profileForm.getAttribute('name') ].resetValidation()

// or you can use a string – the name of the form (you know it from `index.html`)

formValidators['profile-form'].resetValidation()
*/

//function closeModalByEscape(evt) {
//if (evt.key === "Escape") {
//const openedModal = document.querySelector(".modal_open");

// closeModal(openedModal);
// }
//}

//function openModal(modal) {
//modal.classList.add("modal_open");
//document.addEventListener("keydown", closeModalByEscape);
//document.addEventListener("mousedown", closeModalOnOutsideClick);
//}

//function closeModal(modal) {
// modal.classList.remove("modal_open");
//document.removeEventListener("keydown", closeModalByEscape);
// document.removeEventListener("mousedown", closeModalOnOutsideClick);
//}

//function closeModalOnOutsideClick(evt) {
//if (evt.target.classList.contains("modal")) {
//  closeModal(evt.target);
// }
//}

/*function createCard(data) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");

  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  const cardText = cardElement.querySelector(".card__text");
  const cardLike = cardElement.querySelector(".card__like-button");
  const cardRemove = cardElement.querySelector(".card__remove");

  cardImage.style.backgroundImage = `url(${data.link})`;
  cardText.textContent = data.name;
  function cardToggle() {
    cardLike.classList.toggle("card__like-button_active");
  }
  function removeElement() {
    cardElement.remove();
  }
  cardLike.addEventListener("click", cardToggle);
  cardRemove.addEventListener("click", removeElement);
  cardImage.addEventListener("click", function () {
    picModalPreview.src = data.link;
    picModalText.textContent = data.name;
    picModalPreview.alt = data.name;
    openModal(picModal);
  });

  return cardElement;
}
*/
