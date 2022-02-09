import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._formValue = {};
    this._inputs = this._popup.querySelectorAll('.popup__item-item');
    this._inputs.forEach((input) => {
      this._formValue[input.name] = input.value;
    });

    return this._formValue
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}