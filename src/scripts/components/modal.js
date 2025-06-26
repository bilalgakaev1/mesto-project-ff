
export function openPopup (popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupKeyboard);
}

export function closePopup (popup) {
        popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', closePopupKeyboard);
}

export function setEventListenerCloseOnButton (popup) {
    const popupClose = popup.querySelector('.popup__close');
    popupClose.addEventListener('click', () => {
        closePopup(popup)
    });

    popup.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(popup)
        }
    })
}

function closePopupKeyboard(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup)
    }
}

