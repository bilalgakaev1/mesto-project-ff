export const formCard = document.querySelector('form[name="new-place"]')
export const userName = document.querySelector('.profile__title')
export const userDescription = document.querySelector('.profile__description');
export const formEdit = document.querySelector('form[name="edit-profile"]')
export const nameInput = formEdit.elements.name;
export const jobInput = formEdit.elements.description;

const popup = document.querySelectorAll('.popup');

export function openPopup (evt) {
    if (evt.target.classList.contains('profile__add-button')) {
        popup[1].classList.add('popup_is-opened');
        formCard.elements['place-name'].value = '';
        formCard.elements.link.value = '';
    } else if (evt.target.classList.contains('profile__edit-button')) {
        nameInput.value = userName.textContent;
        jobInput.value = userDescription.textContent;
        popup[0].classList.add('popup_is-opened');
    }
    document.addEventListener('click', closePopup)
    document.addEventListener('click', closePopupOver)
    document.addEventListener('keydown', closePopupKeyboard);
}

export function closePopup (evt) {
    if (evt.target.classList.contains('popup__close')) {
        popup[0].classList.remove('popup_is-opened')
        popup[1].classList.remove('popup_is-opened')
        popup[2].classList.remove('popup_is-opened')
        document.removeEventListener('click', closePopup)
        document.removeEventListener('click', closePopupOver)
        document.removeEventListener('keydown', closePopupKeyboard); 
    }
}

export function closePopupOver (evt) {
    if (evt.target.classList.contains('popup')) {
        popup[0].classList.remove('popup_is-opened')
        popup[1].classList.remove('popup_is-opened')
        popup[2].classList.remove('popup_is-opened')
        document.removeEventListener('click', closePopup)
        document.removeEventListener('click', closePopupOver)
        document.removeEventListener('keydown', closePopupKeyboard); 
    }
}

export function closePopupKeyboard(evt) {
    if (evt.key === 'Escape') {
        popup[0].classList.remove('popup_is-opened')
        popup[1].classList.remove('popup_is-opened')
        popup[2].classList.remove('popup_is-opened')
        document.removeEventListener('click', closePopup)
        document.removeEventListener('click', closePopupOver)
        document.removeEventListener('keydown', closePopupKeyboard); 
    }
}

