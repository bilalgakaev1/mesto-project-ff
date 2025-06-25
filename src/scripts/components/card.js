const cardTemplate = document.querySelector('#card-template').content;


export function deleteCard (idCardForDelete, сardForDelete) {
  сardForDelete.remove()
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/${idCardForDelete}`, {
    method: "DELETE",
    headers: {
      authorization: "38b02706-48f5-4d2c-a034-55c008e4c9a7"
    }
  })
  .then((res) => {
    if (res.ok) {
      console.log('Карточка удалена');
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  })
  .catch((err) => {console.log(err)});
}

export function cardLike (item, cardId, count) {
  if (item.classList.contains('card__like-button_is-active')) {
    fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/likes/${cardId} `, {
      method: "DELETE",
      headers: {
        authorization: "38b02706-48f5-4d2c-a034-55c008e4c9a7"
      }
    })
    .then((res) => {
      if (res.ok) {
        console.log('Dont Liked');
      } else {
        Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {console.log(err)});
    item.classList.remove('card__like-button_is-active');
    count.textContent = Number(count.textContent) - 1;
  } else {
    fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/likes/${cardId} `, {
      method: "PUT",
      headers: {
        authorization: "38b02706-48f5-4d2c-a034-55c008e4c9a7"
      }
    })
    .then((res) => {
      if (res.ok) {
        console.log('Liked');
      } else {
        Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {console.log(err)});
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

