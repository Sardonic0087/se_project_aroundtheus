const profileModal = document.querySelector(".modal");
const editProfileModalButton = document.querySelector(".profile__edit-button");
const closeProfileModalButton = profileModal.querySelector(
  ".modal__button-close"
);
const profileModalForm = profileModal.querySelector(".modal__form");
const profileModalInputName =
  profileModalForm.querySelector(".modal__input_name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileModalInputDescription = profileModalForm.querySelector(
  ".modal__input_description"
);

function openModal() {
  profileModal.classList.add("modal-open");
}

function closeModal() {
  profileModal.classList.remove("modal-open");
}

function fillProfileForm() {
  profileModalInputName.value = profileTitle.textContent;
  profileModalInputDescription.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openModal();
}

editProfileModalButton.addEventListener("click", openEditProfileModal);

closeProfileModalButton.addEventListener("click", closeModal);

profileModalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = descriptionValue;
  closeModal();
});
