import { addButton, editButton, popupAdd, popupEdit, popupImage, formCard, closeButton, nameInput, userName, jobInput, userDescription } from "../index.js";

export function openPopup (evt) {
    if (evt.target === addButton) {
        popupAdd.classList.add('popup_is-opened');
        formCard.elements['place-name'].value = '';
        formCard.elements.link.value = '';
    } else if (evt.target === editButton) {
        nameInput.value = userName.textContent;
        jobInput.value = userDescription.textContent;
        popupEdit.classList.add('popup_is-opened');
    }
}

export function closePopup (evt) {
    if (evt.target === popupEdit || evt.target === closeButton[0]) {
        popupEdit.classList.remove('popup_is-opened');
    } else if (evt.target === popupAdd || evt.target === closeButton[1]) {
        popupAdd.classList.remove('popup_is-opened');
    } else if (evt.target === closeButton[2] || evt.target === popupImage){
        popupImage.classList.remove('popup_is-opened');
    } 
}
