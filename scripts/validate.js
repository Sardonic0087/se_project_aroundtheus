//function showInputError(
//formElement,
//inputElement,
// { inputErrorClass, errorClass }
//) {
// const errorMessageElement = formElement.querySelector(
//  `#${inputElement.id}-error`
// );
// inputElement.classList.add(inputErrorClass);
//errorMessageElement.textContent = inputElement.validationMessage;
//errorMessageElement.classList.add(errorClass);
//}

//function hideInputError(
// formElement,
// inputElement,
// { inputErrorClass, errorClass }
//) {
// const errorMessageElement = formElement.querySelector(
//  `#${inputElement.id}-error`
// );
// inputElement.classList.remove(inputErrorClass);
// errorMessageElement.textContent = "";
// errorMessageElement.classList.remove(errorClass);
//}
//function toggleInputError(formElement, inputElement, config) {
//if (!inputElement.validity.valid) {
//showInputError(formElement, inputElement, config);
// } else {
//   hideInputError(formElement, inputElement, config);
// }
//}

//function checkInputValidity(formElement, inputElement, config) {
// if (!inputElement.validity.valid) {
//  return showInputError(formElement, inputElement, config);
// }
// hideInputError(formElement, inputElement, config);
//}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function toggleButtonState(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  if (hasInvalidInput(inputElements)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

//function setEventListeners(formElement, config) {
// const { inputSelector, submitButtonSelector } = config;
// const inputElements = [...formElement.querySelectorAll(inputSelector)];
// const submitButton = formElement.querySelector(submitButtonSelector);
// toggleButtonState(inputElements, submitButton, config);
// inputElements.forEach((inputElement) => {
//  inputElement.addEventListener("input", () => {
//    toggleInputError(formElement, inputElement, config);
//    toggleButtonState(inputElements, submitButton, config);
//   });
// });
//}

//function enableValidation(config) {
//const formElements = Array.from(
//  document.querySelectorAll(config.formSelector)
// );
// formElements.forEach((formElement) => {
//   formElement.addEventListener("submit", (evt) => {
//    evt.preventDefault();
// });
// setEventListeners(formElement, config);
// });
//}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);

export { toggleButtonState, hasInvalidInput, config };
