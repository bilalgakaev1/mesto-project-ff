import { deleteCardApi } from "./api";
import { deleteLike } from "./api";
import { addLike } from "./api";
import { getCards } from "./api";

const cardTemplate = document.querySelector('#card-template').content;

export function deleteCard (сardForDelete) {
   сardForDelete.remove();
}

export function cardLike (item, cardId, count) {
  if (item.classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
    .then(() => {
      item.classList.remove('card__like-button_is-active');
      getCards().then((data) => {
        const card = data.find(item => item._id === cardId)
        if (card) {
          count.textContent = card.likes.length;
        }
      })
    })
    .catch((err) => {console.log(err)})
  } else {
    addLike(cardId)
    .then(() => {
      item.classList.add('card__like-button_is-active');
      getCards().then((data) => {
        const card = data.find(item => item._id === cardId)
        if (card) {
          count.textContent = card.likes.length;
        }
      })
    })
    .catch((err) => {console.log(err)})
  }
  
}

export function createCard (cardInfo, openImage, cardLike, cardDelete, likeCountData, currentId, userId, ownerId) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const likeButton = cardItem.querySelector('.card__like-button');
    const likeCount = cardItem.querySelector('.card__like-count');

    if (ownerId !== userId) {
      delButton.style.display = 'none';
    }
  
    delButton.addEventListener('click', function () {
      cardDelete(currentId, cardItem)
    });

    likeButton.addEventListener('click', () => {
      cardLike(likeButton, currentId, likeCount)
      });
  
    cardImage.addEventListener('click', () => {
      openImage(cardTitle.textContent, cardImage.src);
    });
  
    likeCount.textContent = likeCountData;

    if (cardInfo.likes.some(user => user._id === userId)) {
      likeButton.classList.add('card__like-button_is-active');
    }
    cardImage.src = cardInfo.link;
    cardImage.alt = cardInfo.name;
    cardTitle.textContent = cardInfo.name;
    return cardItem;
  }

