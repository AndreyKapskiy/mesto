export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupEditProfileCloseBtn = document.querySelector('.popup__toggle');
export const editButton = document.querySelector('.profile__edit-button');
export const formEditProfile = document.querySelector('.popup__form')
export const nameField = document.querySelector('.popup__item_el_name')
export const professionField = document.querySelector('.popup__item_el_profession')
export const userName = document.querySelector('.profile__name')
export const userProfession = document.querySelector('.profile__profession')
export const popupAddCardCloseBtn = document.querySelector('.popup__toggle_close');
export const popupCard = document.querySelector('.popup_theme_card');
export const addButton = document.querySelector('.profile__add-button');
export const listElement = document.querySelector('.elements');
export const templateItem = document.querySelector('.template').content;
export const formAddCard = document.querySelector('.popup__form_add');
export const inputAddName = document.querySelector('.popup__item_add');
export const inputAddSrc = document.querySelector('.popup__item_src');
export const popupProfile = document.querySelector('.popup_edit-profile');

export const popups = document.querySelectorAll('.popup')

export const cardListSelector = '.elements';

 
export const initialCards = [
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

export const popupThemeImage = document.querySelector('.popup_theme_image');
export const popupImageCloseBtn = document.querySelector('.popup__toggle_closeimage');
export const popupImage = document.querySelector('.popup__image');
export const popupName = document.querySelector('.popup__name');



export const config = {
 formSelector: '.popup__form',
 inputSelector: '.popup__item-item',
 inputErrorClass: 'popup__item_invalid',
 errorClass: 'popup__item_error_activ',
 submitButtonSelector: '.popup__button',
 submitButtonErrorClass: 'popup__button_invalid'
}