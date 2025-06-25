import { deleteCardApi } from "./api";
import { deleteLike } from "./api";
import { addLike } from "./api";

const cardTemplate = document.querySelector('#card-template').content;

export function deleteCard (idCardForDelete, сardForDelete) {
  сardForDelete.remove()
  deleteCardApi(idCardForDelete);
}

export function cardLike (item, cardId, count) {
  if (item.classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
    item.classList.remove('card__like-button_is-active');
    count.textContent = Number(count.textContent) - 1;
  } else {
    addLike(cardId)
    item.classList.add('card__like-button_is-active');
    count.textContent = Number(count.textContent) + 1;
  }
  
}

export function createCard (cardInfo, openImage, Cardlike, Carddelete, nameValue, linkValue, likeCountData, currentId, isLikedData) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const likeButton = cardItem.querySelector('.card__like-button');
    const likeCount = cardItem.querySelector('.card__like-count');
  
    delButton.addEventListener('click', function () {
      Carddelete(currentId, cardItem)
    });
  
    if (isLikedData) {
      likeButton.classList.add('card__like-button_is-active');
    }

    likeButton.addEventListener('click', () => {
        Cardlike(likeButton, currentId, likeCount)
      });
  
    cardImage.addEventListener('click', () => {
      openImage(cardTitle.textContent, cardImage.src);
    });
  
    likeCount.textContent = likeCountData;

    if (cardInfo) {
      cardImage.src = cardInfo.link;
      cardImage.alt = cardInfo.name;
      cardTitle.textContent = cardInfo.name;
      return cardItem;
    } else if (nameValue) {
      cardImage.src = linkValue.value;
      cardImage.alt = nameValue.value;
      cardTitle.textContent = nameValue.value;
      return cardItem;
    }
  }

