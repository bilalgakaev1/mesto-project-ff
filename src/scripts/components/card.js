const cardTemplate = document.querySelector('#card-template').content;

export function deleteCard (item) {
  item.remove();
}

export function cardLike (item) {
  item.classList.toggle('card__like-button_is-active');
}

export function createCard (cardData, onOpenImage, onCardlike, onCarddelete) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const likeButton = cardItem.querySelector('.card__like-button');
  
    delButton.addEventListener('click', function () {
      onCarddelete(cardItem)
    });
  
    likeButton.addEventListener('click', () => {
        onCardlike(likeButton)
      });
  
    cardImage.addEventListener('click', () => {
      onOpenImage(cardTitle.textContent, cardImage.src);
    });
  
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    return cardItem;
  
}
 
  

  