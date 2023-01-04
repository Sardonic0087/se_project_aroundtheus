let modal = document.querySelector(".modal");
let editModal = document.querySelector(".profile__edit-button");
let closeModal = document.querySelector(".modal__button-close");

function modalOpen() {
  modal.classList.add("modal-open");
}

function modalClose() {
  modal.classList.remove("modal-open");
}

editModal.addEventListener("click", modalOpen);

closeModal.addEventListener("click", modalClose);
