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
const cardsList = document.querySelector(".cards__list");
const editModal = document.querySelector("#edit-modal");
const addModal = document.querySelector("#add-modal");
const picModal = document.querySelector("#picture-modal");
const picModalPreview = picModal.querySelector(".modal__preview-image");
const picModalText = picModal.querySelector(".modal__picture_description");
const editProfileModalButton = document.querySelector(".profile__edit-button");
const addProfileModalButton = document.querySelector(".profile__add-button");
const closeEditProfileModalButton = editModal.querySelector(
  ".modal__button-close"
);
const closeAddProfileModalButton = addModal.querySelector(
  ".modal__button-close"
);
const closePicModalButton = picModal.querySelector(".modal__button-close");
const profileModalForm = editModal.querySelector(".modal__form");
const profileModalInputName =
  profileModalForm.querySelector(".modal__input_name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileModalInputDescription = profileModalForm.querySelector(
  ".modal__input_description"
);
const addModalForm = addModal.querySelector(".modal__form");

function openModal(modal) {
  modal.classList.add("modal-open");
}

function closeModal(modal) {
  modal.classList.remove("modal-open");
}

function fillProfileForm() {
  profileModalInputName.value = profileTitle.textContent;
  profileModalInputDescription.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openModal(editModal);
}

function openAddProfileModal() {
  openModal(addModal);
}

editProfileModalButton.addEventListener("click", openEditProfileModal);
closeEditProfileModalButton.addEventListener("click", function () {
  closeModal(editModal);
});
closeAddProfileModalButton.addEventListener("click", function () {
  closeModal(addModal);
});
addProfileModalButton.addEventListener("click", openAddProfileModal);

closePicModalButton.addEventListener("click", function () {
  closeModal(picModal);
});

profileModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = descriptionValue;
  closeModal(editModal);
});

addModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTitle = evt.target.title.value;
  const cardLink = evt.target.link.value;
  renderCard({ name: cardTitle, link: cardLink });
  closeModal(addModal);
});

initialCards.forEach(function (cardData) {
  renderCard(cardData);
});

function createCard(data) {
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

function renderCard(data) {
  const cardElement = createCard(data);
  cardsList.prepend(cardElement);
}
