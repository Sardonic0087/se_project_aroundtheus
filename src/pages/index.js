import "../pages/index.css";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  config,
  editProfileModal,
  addModal,
  editProfileModalButton,
  addProfileModalButton,
  modals,
  profileModalForm,
  profileModalInputName,
  profileTitle,
  profileDescription,
  profileModalInputDescription,
  addModalForm,
} from "../utils/constants.js";

//FormValidator

const editFormValidator = new FormValidator(config, profileModalForm);

const addFormValidator = new FormValidator(config, addModalForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
//------------------------------------------------------------------------------

const newModalImage = new PopupWithImage({
  popupSelector: "#picture-modal",
});
newModalImage.setEventListeners();

const createCard = (cardData) => {
  const card = new Card(cardData, "#card-template", (name, link) => {
    newModalImage.open(name, link);
  });
  return card.getView();
};

const newCardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      newCardSection.addItem(card);
    },
  },
  ".cards__list"
);
newCardSection.renderItems();
///////////////////////////////////

const newUserInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const newProfileModal = new PopupWithForm("#edit-modal", (values) => {
  newUserInfo.setUserInfo(values.name, values.description);
});

const newCardModal = new PopupWithForm("#add-modal", (input) => {
  const card = createCard({ name: input.title, link: input.link });
  newCardSection.addItem(card);
});

newCardModal.setEventListeners();
newProfileModal.setEventListeners();

addProfileModalButton.addEventListener("click", () => {
  newCardModal.open();
  addFormValidator.toggleButtonState();
});
editProfileModalButton.addEventListener("click", () => {
  const user = newUserInfo.getUserInfo();
  profileModalInputName.value = user.name;
  profileModalInputDescription.value = user.job;
  newProfileModal.open();

  editFormValidator.toggleButtonState();
});

/*
try implementing later

editProfileModalButton.addEventListener("click", () => {
  newProfileModal.setInputValues(newUserInfo.getUserInfo());
  newProfileModal.open();

  editFormValidator.toggleButtonState();
});

*/
