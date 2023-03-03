const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.modal__input;
    this._submitButtonSelector = config.modal__button;
    this._inactiveButtonClass = config.modal__button_disabled;
    this._inputErrorClass = config.modal__input_type_error;
    this._errorClass = config.modal__error_visible;

    this._form = formElement;
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._form.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _toggleButtonState(inputElements) {
    if (this._hasInvalidInput(inputElements)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
      return;
    }
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _hasInvalidInput() {
    return !this._inputList.every(
      (inputElement) => inputElement.validity.valid
    );
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      return this._showInputError(inputElement);
    }
    this._hideInputError(inputElement);
  }

  _toggleInputError(inputElement) {
    if (!this._inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(this._inputElements, this._submitButton, config);
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputError(this._form, inputElement, config);
        this._toggleButtonState(this._inputElements, this._submitButton);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
//const editFormValidator = new FormValidator(config, editForm);
//editFormValidator.enableValidation();

export default FormValidator;
