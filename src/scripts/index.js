import '../pages/index.css';
import { closeButton, closePopup, openPopup } from "./components/modal.js";
import { initialCards } from './components/cards.js';
import { createCard } from './components/card.js';
import { cardLike } from "./components/card.js";
import { deleteCard } from "./components/card.js";

const placesList = document.querySelector('.places__list');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formCard = document.querySelector('form[name="new-place"]')
const userName = document.querySelector('.profile__title')
const userDescription = document.querySelector('.profile__description');
const formEdit = document.querySelector('form[name="edit-profile"]')
const nameInput = formEdit.elements.name;
const jobInput = formEdit.elements.description;
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupLink = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function handleFormSubmitEdit(evt) { 
    evt.preventDefault();

    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;

    userName.textContent = nameInput.textContent;
    userDescription.textContent = jobInput.textContent;
    closePopup(popupEdit);
}

function handleImageClick (name, link) {
  popupLink.src = link;
  popupCaption.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImage)
}

initialCards.forEach(function (item) {
  placesList.append(createCard(item, handleImageClick, cardLike, deleteCard));  
  });

formEdit.addEventListener('submit', handleFormSubmitEdit);
formCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const cardInputName = formCard.elements['place-name'];
  const cardInputLink = formCard.elements.link;
  const cardValue = {
    name: cardInputName.value,
    link: cardInputLink.value
  }
  placesList.prepend(createCard(cardValue, handleImageClick, cardLike, deleteCard));
  closePopup(popupAdd);
});
addButton.addEventListener('click', function () {
  formCard.reset()
  openPopup(popupAdd);
});
editButton.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  openPopup(popupEdit);
})
popupAdd.addEventListener('click', () => {
  closeButton(popupAdd);
})
popupEdit.addEventListener('click', () => {
  closeButton(popupEdit);
})
popupImage.addEventListener('click', () => {
  closeButton(popupImage);
})

