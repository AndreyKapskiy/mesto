const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__toggle');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__button')
const formEditProfile = document.querySelector('.popup__form')

const nameField = document.querySelector('.popup__item_el_name')
const professionField = document.querySelector('.popup__item_el_profession')
const userName = document.querySelector('.profile__name')
const userProfession = document.querySelector('.profile__profession')




const popupCardClose = document.querySelector('.popup__toggle_close');
const popupCard = document.querySelector('.popup_theme_card');
const addButton = document.querySelector('.profile__add-button');



  const listElement = document.querySelector('.elements');
  const templateItem = document.querySelector('.template').content;

  const formAddCard = document.querySelector('.popup__form_add');
  const inputAddName = document.querySelector('.popup__item_add');
  const inputAddSrc = document.querySelector('.popup__item_src');

  const popupProfile = document.querySelector('.popup_edit-profile');
  

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





  cardElement.querySelector('.element__image').addEventListener('click', function(event){
      event.preventDefault();
      
      openImage(cardData.link, cardData.name);
    });

    


    return cardElement;
}
  
const popupThemeImage = document.querySelector('.popup_theme_image');

const popupCardImage = document.querySelector('.popup__toggle_closeimage');

const popupImage = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');

function openImage(src, alt) {
  openPopup(popupThemeImage) //Здравствуйте, Александр:). Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:(( -->
  
  popupImage.src = src;
  popupImage.alt = alt;
  popupName.innerText = alt;
} 

function closeImage() {
  popupThemeImage.classList.remove('popup_opened');
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
}

formAddCard.addEventListener('submit', submitAddCardForm)





function openPopupCard() {
  openPopup(popupCard)  // Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:((
    
}

function closePopupCard() {
  popupCard.classList.remove('popup_opened')
}










function openEditProfileForm() {
    openPopup(popupProfile) // Старался все исправить. Незнаю правильно ли я понял про открытие и закрытие:((
    nameField.value = userName.textContent;
    professionField.value = userProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}
//     По закрытию вообще не понял:((. Пытался разными вариантами, все перестает работать:(
//function addclosePopup() {
//  const popups = document.querySelectorAll('.popup')  
//  for (let popup of popups) {
//  const closeButton = popup.querySelector('.popup__toggle');
//  closeButton.addEventListener('click', () => closePopup(popup))
//  }
//}




function submitEditProfileForm(event) {
    event.preventDefault()
    
    userName.textContent = nameField.value;
    userProfession.textContent = professionField.value;
    

    closePopup();
}

editButton.addEventListener('click', openEditProfileForm)
addButton.addEventListener('click', openPopupCard)
popupClose.addEventListener('click', closePopup)
popupCardClose.addEventListener('click', closePopupCard)

popupCardImage.addEventListener('click', closeImage)


formEditProfile.addEventListener('submit', submitEditProfileForm)


function openPopup(popup) {
  popup.classList.add('popup_opened')
}
