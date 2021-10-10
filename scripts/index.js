const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__toggle');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__button')
const form = document.querySelector('.popup__admin')

const nameField = document.querySelector('.form__item_el_name')
const professionField = document.querySelector('.form__item_el_profession')
const kustoTitle = document.querySelector('.profile__kusto')
const researcherTitle = document.querySelector('.profile__researcher')


function openPopup() {
    popup.classList.add('popup_opened')
    nameField.value = kustoTitle.textContent;
    professionField.value = researcherTitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}


editButton.addEventListener('click', openPopup)

popupClose.addEventListener('click', closePopup) 

formButton.addEventListener('click', closePopup)

function submitForm(event) {
    event.preventDefault()
    
    kustoTitle.textContent = nameField.value;
    researcherTitle.textContent = professionField.value;
    

    closePopup();
}

form.addEventListener('submit', submitForm)