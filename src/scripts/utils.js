export function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_open");

    closeModal(openedModal);
  }
}

export function closeModalOnOutsideClick(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

export function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", closeModalByEscape);
  document.addEventListener("mousedown", closeModalOnOutsideClick);
}

export function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", closeModalByEscape);
  document.removeEventListener("mousedown", closeModalOnOutsideClick);
}
