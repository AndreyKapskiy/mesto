import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

import {initialCards, config, editButton, nameField, professionField, userName, userProfession, addButton, cardListSelector} from '../utils/constants.js'


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
  const card = new Card('.template', data, {handleCardClick: handleCardClick});
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

defaultCardList.renderItems(initialCards);


//Здравствуйте, Надежда:). Старался все исправить. Большое спасибо за комментарии *можно лучше*:).
const imagePopup = new PopupWithImage('.popup_theme_image'); 

function handleCardClick(link, name) {
  imagePopup.open(link, name);
}




const popupWithFormAddCard = new PopupWithForm('.popup_theme_card', {
  submitForm: ({ namecard, linkcard }) => {
    const card = createCard({ name: namecard, link: linkcard })
    defaultCardList.addItemItem(card)
    popupWithFormAddCard.close()
  }
})


 function openPopupCard() {
   formValidators['card-form'].resetValidation()
   popupWithFormAddCard.open()
 }


 function openEditProfileForm() {
     formValidators['profile-form'].resetValidation()
     popupWithFormEditProfileForm.open()
     const info = userInfo.getUserInfo();
     nameField.value = info.name;
     professionField.value = info.profession;
 }



const popupWithFormEditProfileForm = new PopupWithForm('.popup_edit-profile', {
  submitForm: ({ name, profession }) => {
    userInfo.setUserInfo({ name, profession })
    popupWithFormEditProfileForm.close()
  }
})

const userInfo = new UserInfo({
  name: userName,
  profession: userProfession
})


 editButton.addEventListener('click', openEditProfileForm)

 addButton.addEventListener('click', openPopupCard)



imagePopup.setEventListeners();
popupWithFormAddCard.setEventListeners();
popupWithFormEditProfileForm.setEventListeners();
