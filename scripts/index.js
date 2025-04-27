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
  AddDom(createCard(item));  
})