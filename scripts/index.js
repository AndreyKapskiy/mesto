const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__toggle');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__button')
const form = document.querySelector('.popup__form')

const nameField = document.querySelector('.popup__item_el_name')
const professionField = document.querySelector('.popup__item_el_profession')
const kustoTitle = document.querySelector('.profile__name')
const researcherTitle = document.querySelector('.profile__profession')


function openPopup() {
    popup.classList.add('popup_opened')
    nameField.value = kustoTitle.textContent;
    professionField.value = researcherTitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function submitForm(event) {
    event.preventDefault()
    
    kustoTitle.textContent = nameField.value;
    researcherTitle.textContent = professionField.value;
    

    closePopup();
}

editButton.addEventListener('click', openPopup)

popupClose.addEventListener('click', closePopup) 





form.addEventListener('submit', submitForm)