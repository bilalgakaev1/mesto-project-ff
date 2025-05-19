import '../pages/index.css';
import { handleFormSubmitAdd } from "./components/cards.js";
import { openPopup } from "./components/modal.js";
import { closePopup } from "./components/modal.js";

export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');
export const closeButton = document.querySelectorAll('.popup__close');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_new-card');
export const popupImage = document.querySelector('.popup_type_image');
export const cardTemplate = document.querySelector('#card-template').content;
export const placesList = document.querySelector('.places__list');
const content = document.querySelector('.content');
export const userName = document.querySelector('.profile__title')
export const userDescription = document.querySelector('.profile__description');
const popupLink = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const formEdit = document.querySelector('form[name="edit-profile"]')
export const formCard = document.querySelector('form[name="new-place"]')
export const nameInput = formEdit.elements.name;
export const jobInput = formEdit.elements.description;

export function handleImageClick (name, link) {
    popupLink.src = link;
    popupCaption.textContent = name;
    popupImage.classList.add('popup_is-opened');
}

nameInput.value = userName.textContent;
jobInput.value = userDescription.textContent;

function handleFormSubmitEdit(evt) { 
    evt.preventDefault();

    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;

    userName.textContent = nameInput.textContent;
    userDescription.textContent = jobInput.textContent;
    popupEdit.classList.remove('popup_is-opened');
}

formEdit.addEventListener('submit', handleFormSubmitEdit);
formCard.addEventListener('submit', handleFormSubmitAdd);

function closePopupKeyboard(evt) {
    if (evt.key === 'Escape') {
        popupAdd.classList.remove('popup_is-opened');
        popupEdit.classList.remove('popup_is-opened');
        popupImage.classList.remove('popup_is-opened');
    }
}

content.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopupKeyboard);

