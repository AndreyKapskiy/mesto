
//находим все формы и каждой применяем валидацию
function enableValidation(validationConfig) {
  const forms = [...document.querySelectorAll(validationConfig.formSelector)]

  forms.forEach((form) => setFormListeners(form, validationConfig))
}

function setFormListeners(form, config) {
  form.addEventListener('submit', handleSubmit)
  form.addEventListener('input', () => setSubmitButtonState(form, config))

  const inputs = [...form.querySelectorAll(config.inputSelector)]

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => handleFieldValidation(inputElement, form, config))
  })  

  setSubmitButtonState(form, config)
}

//проверка кнопки
function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.submitButtonSelector);

  button.disabled = !form.checkValidity();
  button.classList.toggle(config.submitButtonErrorClass, !form.checkValidity())
}

function handleSubmit(event) {
  event.preventDefault()
}

function handleFieldValidation(input, form, config) {
  console.log(input.validity)
  if (!input.validity.valid) {
    showError(input, form, config)
  } else {
    hideError(input, form, config)
  }
}

function showError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(config.errorClass);
}

function hideError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  
  errorElement.textContent = '';
}
