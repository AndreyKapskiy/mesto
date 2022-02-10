

const config = {
    likeButton: '.element__like',
    deleteButton: '.element__trash_delete',
    likeButtonActiv: 'element__like_activ_like'
}

class Card {
  constructor(cardSelector, data, { handleCardClick }) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    this._handleCardClick(this._link, this._name);
  }

  _handleLikeButton() {
    this._like.classList.toggle(config.likeButtonActiv);
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners(config) {
    this._cardImage.addEventListener('click', () => {
        this._handleOpenPopup();
    });
    this._element.querySelector(config.deleteButton).addEventListener('click', () => {
        this._handleDeleteCard();
    });
    this._like.addEventListener('click', () => {
        this._handleLikeButton();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardName = this._element.querySelector('.element__text');
    this._like = this._element.querySelector(config.likeButton);
    this._setEventListeners(config);


    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;

    return this._element;
  }

}

export default Card;
