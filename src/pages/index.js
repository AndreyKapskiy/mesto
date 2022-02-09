import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

import {initialCards, config, popupEditProfile, popupEditProfileCloseBtn, editButton, formEditProfile, nameField, professionField, userName, userProfession, popupAddCardCloseBtn, popupCard, addButton, listElement, templateItem, formAddCard, inputAddName, inputAddSrc, popupProfile, popups, cardListSelector, popupThemeImage, popupImageCloseBtn, popupImage, popupName} from '../utils/constants.js'


const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(config);


 const createCard = (data) => {
  // создадим карточку
  // главное правильно передать параметры
  const card = new Card('.template', data.name, data.link, {handleCardClick: handleCardClick});
  // сделаем элемент
  const view = card.createCard();
  // добавить в список
  return view;
};

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const elemant = createCard(item);
    defaultCardList.addItem(elemant);
  }
}, cardListSelector);

defaultCardList.renderItems();

//initialCards.forEach((data) => {
//  renderCard(data)
//})

const openImagePopup = new PopupWithImage('.popup_theme_image'); 

function handleCardClick(link, name) {
  openImagePopup.open(link, name);
}

 


// function openImage(src, alt) {
//   openPopup(popupThemeImage)
//   popupImage.src = src;
//   popupImage.alt = alt;
//   popupName.innerText = alt;
// } 


 //function renderCard(initialCard){
 //    const elemant = createCard(initialCard);
 //    listElement.prepend(elemant);
 //}


const PopupWithFormAddCard = new PopupWithForm('.popup_theme_card', {
  submitForm: ({ namecard, linkcard }) => {
    const card = createCard({ name: namecard, link: linkcard })
    defaultCardList.addItem(card)
    PopupWithFormAddCard.close()
  }
})
// function submitAddCardForm(event){
//     event.preventDefault();
//
//     const name = inputAddName.value;
//     const link = inputAddSrc.value;
//    
//     listElement.prepend(createCard({ name, link }))
//     event.target.reset();
//     closePopup(popupCard)
// }

// formAddCard.addEventListener('submit', submitAddCardForm)

 function openPopupCard() {
   formValidators['card-form'].resetValidation()
   PopupWithFormAddCard.open()
 }


 function openEditProfileForm() {
     formValidators['profile-form'].resetValidation()
     PopupWithFormEditProfileForm.open()
     const info = userInfo.getUserInfo();
     nameField.value = info.name;
     professionField.value = info.profession;
 }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeEsc);
// }


const PopupWithFormEditProfileForm = new PopupWithForm('.popup_edit-profile', {
  submitForm: ({ name, profession }) => {
    userInfo.setUserInfo({ name, profession })
    PopupWithFormEditProfileForm.close()
  }
})

const userInfo = new UserInfo({
  nameSelector: userName,
  professionSelector: userProfession
})

// function submitEditProfileForm(event) {
//     event.preventDefault()
//     userName.textContent = nameField.value;
//     userProfession.textContent = professionField.value;
//     closePopup(popupEditProfile) 
// }

 editButton.addEventListener('click', openEditProfileForm)

 addButton.addEventListener('click', openPopupCard)


// formEditProfile.addEventListener('submit', submitEditProfileForm)

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeEsc);
// }


 //закрытие на оверлей и крестики
// popups.forEach((popup) => {
//  popup.addEventListener('mousedown', (evt) => {
//      if (evt.target.classList.contains('popup_opened')) {
//          closePopup(popup)
//      }
//      if (evt.target.classList.contains('popup__toggle')) {
//        closePopup(popup)
//      }
//  })
//}) 


// //закрытие на Esc
// const ESC_KEY = 'Escape';
// function closeEsc(evt) {
//   if (evt.key === ESC_KEY) {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

openImagePopup.setEventListeners();
PopupWithFormAddCard.setEventListeners();
PopupWithFormEditProfileForm.setEventListeners();
