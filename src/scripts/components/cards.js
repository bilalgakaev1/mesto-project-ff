import { handleImageClick } from "../index.js";
import { cardTemplate } from "../index.js";
import { placesList, formCard, popupAdd } from "../index.js";


const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

initialCards.forEach(function (item) {
  addDom(createCard(item));  
})

function deleteCard (item) {
  item.remove();
}

function cardLike (item) {
  item.classList.toggle('card__like-button_is-active');
}

function addDom (card) {
  placesList.append(card);
}

export function handleFormSubmitAdd (evt) {
  evt.preventDefault();
  createCard()
}

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
    console.log(cardTitle.textContent, cardImage.src)
    handleImageClick(cardTitle.textContent, cardImage.src);
});
  if (array) {
    cardImage.src = array.link;
    cardImage.alt = array.name;
    cardTitle.textContent = array.name;
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

/*
import { handleImageClick } from "../index.js";
import { cardTemplate } from "../index.js";
import { placesList, formCard, popupAdd } from "../index.js";


const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

initialCards.forEach(function (item) {
  addDom(createCard(item));  
})

function deleteCard (item) {
  item.remove();
}

function cardLike (item) {
  item.classList.toggle('card__like-button_is-active');
}

function addDom (card) {
  placesList.append(card);
}

export function handleFormSubmitAdd (evt) {
  evt.preventDefault();

  const CardTextInput = formCard.elements['place-name'];
  const CardUrlInput = formCard.elements.link;

  const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
  const cardImage = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title');
  const delButton = cardItem.querySelector('.card__delete-button');
  const likeButton = cardItem.querySelector('.card__like-button');
  

  cardImage.src = CardUrlInput.value;
  cardImage.alt = CardTextInput.value;
  cardTitle.textContent = CardTextInput.value;
  placesList.prepend(cardItem);

  popupAdd.classList.remove('popup_is-opened');
  delButton.addEventListener('click', function () {
      deleteCard(cardItem)
  });
  likeButton.addEventListener('click', () => {
      cardLike(likeButton);
  });
  cardImage.addEventListener('click', () => {
      handleImageClick(cardTitle.textContent, cardImage.src);
  });
}

export function createCard (array) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
  const delButton = cardItem.querySelector('.card__delete-button');
  const cardImage = cardItem.querySelector('.card__image');
  const cardTitle = cardItem.querySelector('.card__title');
  const likeButton = cardItem.querySelector('.card__like-button');

  

  cardImage.src = array.link;
  cardImage.alt = array.name;
  cardTitle.textContent = array.name;



  delButton.addEventListener('click', function () {
      deleteCard(cardItem)
  });
  likeButton.addEventListener('click', () => {cardLike(likeButton)});
  cardImage.addEventListener('click', () => {
      handleImageClick(array.name, array.link)
  });
  return cardItem;
}*/
