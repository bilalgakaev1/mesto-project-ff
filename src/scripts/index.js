import '../pages/index.css'
import { closePopup, openPopup } from "./components/modal.js";
import { initialCards } from './components/cards.js';
import { createCard } from './components/card.js';
import { cardLike } from "./components/card.js";
import { deleteCard } from "./components/card.js";
import { hideInputError } from "./components/validation.js";
import { getCards } from './components/api.js';
import { getUsers } from './components/api.js';
import { addCard } from './components/api.js';
import { updateAvatar } from './components/api.js';
import { updateProfil } from './components/api.js';

const placesList = document.querySelector('.places__list');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formCard = document.querySelector('form[name="new-place"]')
const userName = document.querySelector('.profile__title')
const userDescription = document.querySelector('.profile__description');
const userImage = document.querySelector('.profile__image')
const formEdit = document.querySelector('form[name="edit-profile"]')
const nameInput = formEdit.elements.name;
const jobInput = formEdit.elements.description;
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const cardInputName = formCard.elements['place-name'];
const cardInputLink = formCard.elements.link;
const popupDelete = document.querySelector('.popup_type_delete');
const formDelete = document.querySelector('form[name="delete"]');
const popupAvatar = document.querySelector('.popup_type_new-avatar');
const formAvatar = document.querySelector('form[name="new-avatar"]');
const avatarInput = formAvatar.querySelector('.popup__input_type_url');
const imageContainer = document.querySelector('.profile__image-container')



const popup = document.querySelectorAll('.popup');

const popupEdit = document.querySelector('.popup_type_edit');
const content = document.querySelector('.content');
const popupLink = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function handleFormSubmitEdit(evt) { 
    evt.preventDefault();

    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;

    userName.textContent = nameInput.textContent;
    userDescription.textContent = jobInput.textContent;
    const submitButton = evt.submitter || evt.target.querySelector('.popup__button')
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...';
    submitButton.disabled = true;
    closePopup(popupEdit);
    updateProfil(userName, userDescription)
    .then((res) => { return res.json()})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err.status)})
    .finally(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    })
}

function handleImageClick (name, link) {
  popupLink.src = link;
  popupCaption.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImage)
}

formAvatar.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter || evt.target.querySelector('.popup__button')
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';
  submitButton.disabled = true;
  updateAvatar(avatarInput)
  .finally(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  })
  userImage.style.backgroundImage = `url(${avatarInput.value})`;
  closePopup(popupAvatar)

  
})
imageContainer.addEventListener('click', function() {
  openPopup(popupAvatar);
  formAvatar.reset()
})
formDelete.addEventListener('submit', function(evt) {
  evt.preventDefault()
  const submitButton = evt.submitter || evt.target.querySelector('.popup__button')
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Удаление...';
  submitButton.disabled = true;
  deleteCard(idCardForDelete, сardForDelete)
  .finally(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  })
  closePopup(popupDelete);
});
formEdit.addEventListener('submit', handleFormSubmitEdit);
formCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const submitButton = evt.submitter || evt.target.querySelector('.popup__button')
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';
  submitButton.disabled = true;
  addCard(cardInputName , cardInputLink)
  .then((res) => {return res.json()})
    .then((data) => {
      placesList.prepend(createCard(null, handleImageClick, cardLike, handleDeleteClick, cardInputName, cardInputLink, data.likes.length, data._id))})
  .finally(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  })
  .catch((err) => {console.log(err.status)})
  closePopup(popupAdd);
});
addButton.addEventListener('click', function () {
  formCard.elements['place-name'].value = ''; 
  formCard.elements.link.value = '';
  openPopup(popupAdd);
  hideInputError(formCard, cardInputName)
  hideInputError(formCard, cardInputLink)
});
editButton.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  openPopup(popupEdit);
  hideInputError(formEdit, nameInput)
  hideInputError(formEdit, jobInput)
})

Promise.all([getUsers(), getCards()])
  
  .then(([userData, cardData]) => {
    cardData.forEach(cardInfo => {
      let isLiked = cardInfo.likes.some(user => user._id === userData._id);
      placesList.prepend(createCard(cardInfo, handleImageClick, cardLike, handleDeleteClick, null, null, cardInfo.likes.length, cardInfo._id, isLiked));
      if (cardInfo.owner._id !== "05ed510d7218804f847442a7") {
        document.querySelector('.card__delete-button').style.display = 'none';
      }
    });
    
    userName.textContent = userData.name;
    userDescription.textContent = userData.about;
    userImage.style.backgroundImage = `url('${userData.avatar}')`;
  });

  let idCardForDelete;
  let сardForDelete;
  
  function handleDeleteClick(id, card) {
  idCardForDelete = id;
  сardForDelete = card;
  openPopup(popupDelete);
  }



