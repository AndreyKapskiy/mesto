class FormValidator {
  constructor(config, formName) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector; 
    this._submitButtonErrorClass = config.submitButtonErrorClass;
    this._inputErrorClass = config.inputErrorClass;  
    this._errorClass = config.errorClass;
    this._config = config;
    this._formName = formName;
    this._buttonElement = this._formName.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formName.querySelectorAll(this._inputSelector));
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage)
    } else {
        this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formName.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formName.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._submitButtonErrorClass)
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton = () => {
    this._buttonElement.classList.remove(this._submitButtonErrorClass)
    this._buttonElement.disabled = false;
  }

  _toggleButtonState() {
    if (this._getInvalidInput()) {
        this.disableSubmitButton()
    } else {
        this._enableSubmitButton()
    }
  }

  _getInvalidInput() {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid
    })
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
    })
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    })
    })
  }

  enableValidation() {
    this._setEventListeners()
  }

}

export default FormValidator;