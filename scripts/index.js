import Card from './Card.js';
import FormValidator from './FormValidator.js';



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

 const popups = document.querySelectorAll('.popup')
 
  
 const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item-item',
  inputErrorClass: 'popup__item_invalid',
  errorClass: 'popup__item_error_activ',
  submitButtonSelector: '.popup__button',
  submitButtonErrorClass: 'popup__button_invalid'
}

//Здравствуйте, Геннадий:). Старался все исправить. Большое спасибо за комментарии *можно лучше*:). Новое пока не удаля, что закомментировал. 

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


//const editFormValidator = new FormValidator(config, popupEditProfile);
//editFormValidator.enableValidation();

//const addFormValidator = new FormValidator(config, popupCard);
//addFormValidator.enableValidation();

 const createCard = (data) => {
  // создадим карточку
  // главное правильно передать параметры
  const card = new Card('.template', data.name, data.link, openImage);
  // сделаем элемент
  const view = card.createCard();
  // добавить в список
  return view;
};

initialCards.forEach((data) => {
  renderCard(data)
})

  
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

// function closeImage() {
//   closePopup(popupThemeImage)
// } 

 function renderCard(initialCard){
     const elemant = createCard(initialCard);
     listElement.prepend(elemant);
 }

 function submitAddCardForm(event){
     event.preventDefault();

     const name = inputAddName.value;
     const link = inputAddSrc.value;
    
     listElement.prepend(createCard({ name, link }))
     event.target.reset();
     closePopup(popupCard)//closePopupCard();
     //addFormValidator.resetValidation();
 }

 formAddCard.addEventListener('submit', submitAddCardForm)

 function openPopupCard() {
   formValidators['card-form'].resetValidation()
   openPopup(popupCard)  // Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:((
 }

// function closePopupCard() {
//   closePopup(popupCard)
// }

// function closePopupProfile() {
//   closePopup(popupEditProfile)
// }

 function openEditProfileForm() {
     formValidators['profile-form'].resetValidation()
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

 addButton.addEventListener('click', openPopupCard)

// popupEditProfileCloseBtn.addEventListener('click', closePopupProfile)
// popupAddCardCloseBtn.addEventListener('click', closePopupCard)
// popupImageCloseBtn.addEventListener('click', closeImage)

 formEditProfile.addEventListener('submit', submitEditProfileForm)

 function openPopup(popup) {
   popup.classList.add('popup_opened');
   document.addEventListener('keydown', closeEsc);
 }


 //закрытие на оверлей и крестики
 popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__toggle')) {
        closePopup(popup)
      }
  })
}) 


// popupEditProfile.addEventListener('click', function (evt) {
//   if (evt.target.classList.contains('popup')) {
//     closePopup(popupEditProfile);
//   };
// });

// popupCard.addEventListener('click', function (evt) {
//   if (evt.target.classList.contains('popup')) {
//     closePopup(popupCard);
//   };
// });

// popupThemeImage.addEventListener('click', function (evt) {
//   if (evt.target.classList.contains('popup')) {
//    closePopup(popupThemeImage);
//   };
// });

 //закрытие на Esc
 const ESC_KEY = 'Escape';
 function closeEsc(evt) {
   if (evt.key === ESC_KEY) {
     const openedPopup = document.querySelector('.popup_opened');
     closePopup(openedPopup);
   }
 }

