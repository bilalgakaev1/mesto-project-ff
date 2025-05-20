const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const formCard = document.querySelector('form[name="new-place"]');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupLink = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export function createCard (array) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const likeButton = cardItem.querySelector('.card__like-button');
  
    delButton.addEventListener('click', function () {
      deleteCard(cardItem)
    });
  
    likeButton.addEventListener('click', () => {cardLike(likeButton)});
  
    cardImage.addEventListener('click', () => {
      handleImageClick(cardTitle.textContent, cardImage.src);
    });
  
    if (array) {
      cardImage.src = array.link;
      cardImage.alt = array.name;
      cardTitle.textContent = array.name;
      placesList.append(cardItem);
      return cardItem;
    }
  
    const CardTextInput = formCard.elements['place-name'];
    const CardUrlInput = formCard.elements.link;
  
  
    cardImage.src = CardUrlInput.value;
    cardImage.alt = CardTextInput.value;
    cardTitle.textContent = CardTextInput.value;
    placesList.prepend(cardItem);
    popupAdd.classList.remove('popup_is-opened');
  }

  export function handleFormSubmitAdd (evt) {
    evt.preventDefault();
    createCard()
  }

  function deleteCard (item) {
    item.remove();
  }
  
  function cardLike (item) {
    item.classList.toggle('card__like-button_is-active');
  }

function handleImageClick (name, link) {
    popupLink.src = link;
    popupCaption.alt = name;
    popupCaption.textContent = name;
    popupImage.classList.add('popup_is-opened');
}
  