const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileCloseBtn = document.querySelector('.popup__toggle');
const editButton = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.popup__form')
const nameField = document.querySelector('.popup__item_el_name')
const professionField = document.querySelector('.popup__item_el_profession')
const userName = document.querySelector('.profile__name')
const userProfession = document.querySelector('.profile__profession')
const popupAddCardCloseBtn = document.querySelector('.popup__toggle_close');
const popupCard = document.querySelector('.popup_theme_card');
const addButton = document.querySelector('.profile__add-button');
const listElement = document.querySelector('.elements');
const templateItem = document.querySelector('.template').content;
const formAddCard = document.querySelector('.popup__form_add');
const inputAddName = document.querySelector('.popup__item_add');
const inputAddSrc = document.querySelector('.popup__item_src');
const popupProfile = document.querySelector('.popup_edit-profile');
const formButton = formAddCard.querySelector('.popup__button')
  


initialCards.forEach(renderCard)

function createCard(cardData){
    const cardElement = templateItem.querySelector('.element').cloneNode(true);
    const elementImage = cardElement.querySelector('.element__image');
    cardElement.querySelector('.element__text').innerText = cardData.name;
    elementImage.src = cardData.link;
    elementImage.alt = cardData.name;

    cardElement.querySelector('.element__trash_delete').addEventListener('click', (event)=>{
        event.target.closest('.element').remove();
    });

    cardElement.querySelector('.element__like').addEventListener('click', (event)=>{
      event.target.classList.toggle('element__like_activ_like');
    });

  elementImage.addEventListener('click', function(event){
      event.preventDefault();
      openImage(cardData.link, cardData.name);
    });

    return cardElement;
}
  
const popupThemeImage = document.querySelector('.popup_theme_image');
const popupImageCloseBtn = document.querySelector('.popup__toggle_closeimage');
const popupImage = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');

function openImage(src, alt) {
  openPopup(popupThemeImage) //Здравствуйте, Александр:). Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:(( -->
  popupImage.src = src;
  popupImage.alt = alt;
  popupName.innerText = alt;
} 

function closeImage() {
  closePopup(popupThemeImage)
} 

function renderCard(initialCard){
    const elemant = createCard(initialCard);
    listElement.prepend(elemant);
}

function submitAddCardForm(event){
    event.preventDefault();

    const name = inputAddName.value;
    const link = inputAddSrc.value;
    
    renderCard({ name, link })
    event.target.reset();
    closePopupCard();
    formButton.disabled = true; //вроде бы работает:). Сделал цвет как при валидации:)(действительно на черную так и хотелось нажать:)).
}

formAddCard.addEventListener('submit', submitAddCardForm)

function openPopupCard() {
  openPopup(popupCard)  // Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:((
}

function closePopupCard() {
  closePopup(popupCard)
}

function closePopupProfile() {
  closePopup(popupEditProfile)
}

function openEditProfileForm() {
    openPopup(popupProfile) // Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:((
    nameField.value = userName.textContent;
    professionField.value = userProfession.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
}

function submitEditProfileForm(event) {
    event.preventDefault()
    userName.textContent = nameField.value;
    userProfession.textContent = professionField.value;
    closePopup(popupEditProfile) 
}

editButton.addEventListener('click', openEditProfileForm)   //Здравствуйте:). Старался реализовать очистку попапа при повторном окрытии и вродебы написал функциию. Можете написать замечания.
//{
//  resetError(popupProfile)
//  openPopup(popupProfile)
//}
addButton.addEventListener('click', openPopupCard)
//{
//  resetError(popupCard)
//  openPopup(popupCard)
//}
popupEditProfileCloseBtn.addEventListener('click', closePopupProfile)
popupAddCardCloseBtn.addEventListener('click', closePopupCard)
popupImageCloseBtn.addEventListener('click', closeImage)

formEditProfile.addEventListener('submit', submitEditProfileForm)

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  inputErrorClass: 'popup__item_invalid',
  errorClass: 'popup__item_error_activ',
  submitButtonSelector: '.popup__button',
  submitButtonErrorClass: 'popup__button_invalid'
}

enableValidation(config)

//закрытие на оверлей
popupEditProfile.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupEditProfile);
  };
});

popupCard.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupCard);
  };
});

popupThemeImage.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupThemeImage);
  };
});

//закрытие на Esc
const ESC_KEY = 'Escape';
function closeEsc(evt) {
  if (evt.key === ESC_KEY) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


//сброс текста ошибок при повторном открытии 
//
//function resetError(popup) {
//  const errorTexts = Array.form(popup.querySelectorALL('.popup__item_error'));
//  const errorInputs = Array.form(popup.querySelectorALL('.popup__item'));
//  errorTexts.forEach((item) => {
//    item.classList.remove('popup__item_error_activ');
//  });
//  errorInputs.forEach((item) => {
//    item.classList.remove('popup__item_invalid');
//  });
//  openPopup(popup);
//}