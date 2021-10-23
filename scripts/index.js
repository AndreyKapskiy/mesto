const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__toggle');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__button')
const form = document.querySelector('.popup__form')

const nameField = document.querySelector('.popup__item_el_name')
const professionField = document.querySelector('.popup__item_el_profession')
const kustoTitle = document.querySelector('.profile__name')
const researcherTitle = document.querySelector('.profile__profession')




const popupcardClose = document.querySelector('.popup__toggle_close');
const popupcard = document.querySelector('.popup_theme_card');
const addButton = document.querySelector('.profile__add-button');

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

  const listElement = document.querySelector('.elements');
  const templateItem = document.querySelector('.template').content;

  const formAddcard = document.querySelector('.popup__form_add');
  const inputAddName = document.querySelector('.popup__item_add');
  const inputAddsrc = document.querySelector('.popup__item_src');


  

  initialCards.forEach(renderCard)

function createCard(initialCard){
    const elemant = templateItem.querySelector('.element').cloneNode(true);
    elemant.querySelector('.element__text').innerText = initialCard.name;
    elemant.querySelector('.element__image').src = initialCard.link;

    elemant.querySelector('.element__trash_delete').addEventListener('click', (event)=>{
        event.target.closest('.element').remove();
    });

    elemant.querySelector('.element__like').addEventListener('click', (event)=>{
      event.target.classList.toggle('element__like_activ_like');
  });





    elemant.querySelector('.element__image').addEventListener('click', function(event){
      event.preventDefault();
      const elementCard = event.target.closest('.element');
      const elementSrc = elementCard.querySelector('.element__image').src;
      const elementAlt = elementCard.querySelector('.element__text').innerText;
      openImage(elementSrc, elementAlt);
    });

    


    return elemant;
}
  
const popupThemeImage = document.querySelector('.popup_theme_image');

const popupcardImage = document.querySelector('.popup__toggle_closeimage');

function openImage(src, alt) {
  popupThemeImage.classList.add('popup_opened');
  const popupImage = document.querySelector('.popup__image');
  const popupName = document.querySelector('.popup__name');
  popupImage.src = src;
  popupImage.innerText = alt;
  popupName.textContent = alt;
} 

function closeImage() {
  popupThemeImage.classList.remove('popup_opened');
} 







function renderCard(initialCard){
    const elemant = createCard(initialCard);
    listElement.prepend(elemant);
}

function addSubmit(event){
    event.preventDefault();

    const name = inputAddName.value;
    const link = inputAddsrc.value;
    
    renderCard({ name, link })
    event.target.reset();
    closepopupcard();
}

formAddcard.addEventListener('submit', addSubmit)





function openpopupcard() {
    popupcard.classList.add('popup_opened')
    
}

function closepopupcard() {
    popupcard.classList.remove('popup_opened')
}










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
addButton.addEventListener('click', openpopupcard)
popupClose.addEventListener('click', closePopup)
popupcardClose.addEventListener('click', closepopupcard)

popupcardImage.addEventListener('click', closeImage)


form.addEventListener('submit', submitForm)