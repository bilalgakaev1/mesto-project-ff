import '../pages/index.css'
import { closePopup, openPopup, setEventListenerCloseOnButton } from "./components/modal.js";
import { createCard, deleteCard, cardLike } from './components/card.js';
import { hideInputError } from "./components/validation.js";
import { deleteCardApi, getCards, getUsers, addCard, updateAvatar, updateProfil } from './components/api.js';

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
const popupEdit = document.querySelector('.popup_type_edit');
const popupLink = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

setEventListenerCloseOnButton(popupImage);
setEventListenerCloseOnButton(popupAvatar);
setEventListenerCloseOnButton(popupAdd);
setEventListenerCloseOnButton(popupEdit);
setEventListenerCloseOnButton(popupDelete)

function handleFormSubmitEdit(evt) { 
    evt.preventDefault();

    const submitButton = evt.submitter || evt.target.querySelector('.popup__button')
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Сохранение...';
    submitButton.disabled = true;
    
    updateProfil(userName, userDescription)
    .then((res) => {
      console.log('Данные профиля успешно обновлены!');
      userName.textContent = nameInput.value;
      userDescription.textContent = jobInput.value;
      closePopup(popupEdit);
    })
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
  openPopup(popupImage);
}

formAvatar.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter || evt.target.querySelector('.popup__button')
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';
  submitButton.disabled = true;
  updateAvatar(avatarInput)
  .then(() => {
    userImage.style.backgroundImage = `url(${avatarInput.value})`;
    closePopup(popupAvatar)
    console.log('Аватар обновлен')
  })
  .finally(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  })
})
imageContainer.addEventListener('click', function() {
  openPopup(popupAvatar);
  formAvatar.reset()
})
formDelete.addEventListener('submit', function(evt) {
  evt.preventDefault()
  deleteCardApi(idCardForDelete)
  .then((res) => {
        if (res.ok) {
          deleteCard(сardForDelete)
          console.log('Карточка удалена');
          closePopup(popupDelete);
        } else {
          Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .catch((err) => {console.log(err)});
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
      closePopup(popupAdd);
      placesList.prepend(createCard(data, handleImageClick, cardLike, handleDeleteClick, data.likes.length, data._id, userId, data.owner._id))
    })
  .finally(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  })
  .catch((err) => {console.log(err.status + ' Не удалось добавить карточку')})
}) 
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

let userId;

Promise.all([getUsers(), getCards()])
  
  .then(([userData, cardData]) => {
    userId = userData._id;
    cardData.forEach(cardInfo => {
      placesList.prepend(createCard(cardInfo, handleImageClick, cardLike, handleDeleteClick, cardInfo.likes.length, cardInfo._id, userId, cardInfo.owner._id));
    });
    
    userName.textContent = userData.name;
    userDescription.textContent = userData.about;
    userImage.style.backgroundImage = `url('${userData.avatar}')`;
  })
  .catch((err) => {console.log(err.status)})

  let idCardForDelete;
  let сardForDelete;
  
  function handleDeleteClick(id, card) {
  idCardForDelete = id;
  сardForDelete = card;
  openPopup(popupDelete);
  }



