const cardTemplate = document.querySelector('#card-template').content;

export function deleteCard (item) {
  item.remove();
}

export function cardLike (item) {
  item.classList.toggle('card__like-button_is-active');
}

export function createCard (cardData, openImage, Cardlike, Carddelete, nameValue, linkValue) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const likeButton = cardItem.querySelector('.card__like-button');
  
    delButton.addEventListener('click', function () {
      Carddelete(cardItem)
    });
  
    likeButton.addEventListener('click', () => {
        Cardlike(likeButton)
      });
  
    cardImage.addEventListener('click', () => {
      openImage(cardTitle.textContent, cardImage.src);
    });
  
    if (cardData) {
      cardImage.src = cardData.link;
      cardImage.alt = cardData.name;
      cardTitle.textContent = cardData.name;
      return cardItem;
    } else {
      cardImage.src = linkValue.value;
      cardImage.alt = nameValue.value;
      cardTitle.textContent = nameValue.value;
      return cardItem;
    }
  }

 
  

  