import '../pages/index.css';
import { handleFormSubmitAdd } from "./components/card.js";
import { openPopup } from "./components/modal.js";
import { formEdit } from "./components/modal.js";
import { nameInput } from "./components/modal.js";
import { jobInput } from "./components/modal.js";
import { userName } from "./components/modal.js";
import { userDescription } from "./components/modal.js";
import { formCard } from "./components/modal.js";
import { initialCards } from './components/cards.js';
import { createCard } from './components/card.js';

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
    popupEdit.classList.remove('popup_is-opened');
}

initialCards.forEach(function (item) {
    createCard(item);  
  });

formEdit.addEventListener('submit', handleFormSubmitEdit);
formCard.addEventListener('submit', handleFormSubmitAdd);
content.addEventListener('click', openPopup);



