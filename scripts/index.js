const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function deleteCard (item) {
    item.remove();
}


function createCard (array) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    cardImage.src = array.link;
    cardImage.alt = array.name;
    cardTitle.textContent = array.name;

    delButton.addEventListener('click', function () {
        deleteCard(cardItem)
    })

    return cardItem;
}

function addDom (card) {
    placesList.append(card);
}

initialCards.forEach(function (item) {
  addDom(createCard(item));  
})
/*--------------------------------------------------------------------------------------------------------------------------------------  */
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close');
const content = document.querySelector('.content');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const userName = document.querySelector('.profile__title')
const userDescription = document.querySelector('.profile__description');

const formEdit = document.querySelector('form[name="edit-profile"]')
const formCard = document.querySelector('form[name="new-place"]')
const nameInput = formEdit.elements.name;
const jobInput = formEdit.elements.description;

nameInput.value = userName.textContent;
jobInput.value = userDescription.textContent;

function handleFormSubmitEdit(evt) { 
    evt.preventDefault();

    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;

    userName.textContent = nameInput.textContent;
    userDescription.textContent = jobInput.textContent;
    popupEdit.style.display = 'none';
    popupEdit.classList.remove('.popup_is-opened');
}

function handleFormSubmitAdd (evt) {
    evt.preventDefault();

    const CardTextInput = formCard.elements['place-name'];
    const CardUrlInput = formCard.elements.link;

    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    const delButton = cardItem.querySelector('.card__delete-button');

    cardImage.src = CardUrlInput.value;
    cardImage.alt = CardTextInput.value;
    cardTitle.textContent = CardTextInput.value;
    console.log(cardImage.src, cardTitle.textContent)
    placesList.prepend(cardItem);
    popupAdd.style.display = 'none';
    popupAdd.classList.remove('.popup_is-opened');
    delButton.addEventListener('click', function () {
        deleteCard(cardItem)
    })
}

formEdit.addEventListener('submit', handleFormSubmitEdit);
formCard.addEventListener('submit', handleFormSubmitAdd);


function openPopup (evt) {
    if (evt.target === addButton) {
        popupAdd.classList.add('.popup_is-opened');
        popupAdd.style.display = 'block';
        formCard.elements['place-name'].value = '';
        formCard.elements.link.value = '';
    } else if (evt.target === editButton) {
        nameInput.value = userName.textContent;
        jobInput.value = userDescription.textContent;
        popupEdit.style.display = 'block';
        popupEdit.classList.add('.popup_is-opened');
    }
}

function closePopup (evt) {
    if (evt.target === popupEdit || evt.target === closeButton[0]) {
        popupEdit.style.display = 'none';
        popupEdit.classList.remove('.popup_is-opened');
    } else if (evt.target === popupAdd || evt.target === closeButton[1]) {
        popupAdd.style.display = 'none';
        popupAdd.classList.remove('.popup_is-opened');
    }
}

function closePopupKeyboard(evt) {
    if (evt.key === 'Escape') {
        popupEdit.style.display = 'none';
        popupAdd.style.display = 'none';
        popupAdd.classList.remove('.popup_is-opened');
        popupEdit.classList.remove('.popup_is-opened');
    }
}

content.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopupKeyboard);

