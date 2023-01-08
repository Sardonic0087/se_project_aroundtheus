const modal = document.querySelector(".modal");
const editModal = document.querySelector(".profile__edit-button");
const closeModal = document.querySelector(".modal__button-close");
const modalForm = document.querySelector(".modal__form");
const modalInputName = modalForm.querySelector(".modal__input_name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalInputDescription = modalForm.querySelector(
  ".modal__input_description"
);

function modalOpen() {
  modal.classList.add("modal-open");
}

function modalClose() {
  modal.classList.remove("modal-open");
}

editModal.addEventListener("click", function () {
  modalInputName.value = profileTitle.textContent;
  modalInputDescription.value = profileDescription.textContent;
  modalOpen();
});

closeModal.addEventListener("click", modalClose);

modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;
  console.log(nameValue);
  console.log(descriptionValue);
  profileTitle.textContent = nameValue;
  profileDescription.textContent = descriptionValue;
  modalClose();
});
