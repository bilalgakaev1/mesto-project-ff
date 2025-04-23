// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
/*
let card = document.createElement('div');
card.classList.add('card');

let img = document.createElement('img');
img.classList.add('card__image');
img.setAttribute('src', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg');

let btn = document.createElement('button');
btn.classList.add('card__delete-button');

let cardDescription = document.createElement('div');
cardDescription.classList.add('card__description');

let cardTitle = document.createElement('h2');
cardTitle.classList.add('card__title');
cardTitle.textContent = 'Архыз';

let btnLike = document.createElement('button');
btnLike.classList.add('card__like-button');

cardDescription.append(cardTitle, btnLike);
card.append(img, btn, cardDescription);

let places = document.querySelector('.places__list');
places.append(card);


/*Second Card*//*
let card2 = document.createElement('div');
card2.classList.add('card');

let img2 = document.createElement('img');
img2.classList.add('card__image');
img2.setAttribute('src', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg');

let btn2 = document.createElement('button');
btn2.classList.add('card__delete-button');

let cardDescription2 = document.createElement('div');
cardDescription2.classList.add('card__description');

let cardTitle2 = document.createElement('h2');
cardTitle2.classList.add('card__title');
cardTitle2.textContent = 'Челябинская область';

let btnLike2 = document.createElement('button');
btnLike2.classList.add('card__like-button');

cardDescription2.append(cardTitle2, btnLike2);
card2.append(img2, btn2, cardDescription2);

let places2 = document.querySelector('.places__list');
places2.append(card2);


/*Three Card*//*
let card3 = document.createElement('div');
card3.classList.add('card');

let img3 = document.createElement('img');
img3.classList.add('card__image');
img3.setAttribute('src', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg');

let btn3 = document.createElement('button');
btn3.classList.add('card__delete-button');

let cardDescription3 = document.createElement('div');
cardDescription3.classList.add('card__description');

let cardTitle3 = document.createElement('h2');
cardTitle3.classList.add('card__title');
cardTitle3.textContent = 'Иваново';

let btnLike3 = document.createElement('button');
btnLike3.classList.add('card__like-button');

cardDescription3.append(cardTitle3, btnLike3);
card3.append(img3, btn3, cardDescription3);

let places3 = document.querySelector('.places__list');
places3.append(card3);


/*Four Card*//*
let card4 = document.createElement('div');
card4.classList.add('card');

let img4 = document.createElement('img');
img4.classList.add('card__image');
img4.setAttribute('src', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg');

let btn4 = document.createElement('button');
btn4.classList.add('card__delete-button');

let cardDescription4 = document.createElement('div');
cardDescription4.classList.add('card__description');

let cardTitle4 = document.createElement('h2');
cardTitle4.classList.add('card__title');
cardTitle4.textContent = 'Камчатка';

let btnLike4 = document.createElement('button');
btnLike4.classList.add('card__like-button');

cardDescription4.append(cardTitle4, btnLike4);
card4.append(img4, btn4, cardDescription4);

let places4 = document.querySelector('.places__list');
places4.append(card4);


/*Five Card*//*
let card5 = document.createElement('div');
card5.classList.add('card');

let img5 = document.createElement('img');
img5.classList.add('card__image');
img5.setAttribute('src', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg');

let btn5 = document.createElement('button');
btn5.classList.add('card__delete-button');

let cardDescription5 = document.createElement('div');
cardDescription5.classList.add('card__description');

let cardTitle5 = document.createElement('h2');
cardTitle5.classList.add('card__title');
cardTitle5.textContent = 'Холмогорский район';

let btnLike5 = document.createElement('button');
btnLike5.classList.add('card__like-button');

cardDescription5.append(cardTitle5, btnLike5);
card5.append(img5, btn5, cardDescription5);

let places5 = document.querySelector('.places__list');
places5.append(card5);


/*Six Card*//*
let card6 = document.createElement('div');
card6.classList.add('card');

let img6 = document.createElement('img');
img6.classList.add('card__image');
img6.setAttribute('src', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg');

let btn6 = document.createElement('button');
btn6.classList.add('card__delete-button');

let cardDescription6 = document.createElement('div');
cardDescription6.classList.add('card__description');

let cardTitle6 = document.createElement('h2');
cardTitle6.classList.add('card__title');
cardTitle6.textContent = 'Байкал';

let btnLike6 = document.createElement('button');
btnLike6.classList.add('card__like-button');

cardDescription6.append(cardTitle6, btnLike6);
card6.append(img6, btn6, cardDescription6);

let places6 = document.querySelector('.places__list');
places6.append(card6);

/*------------------------------------*/
/*
btn6.addEventListener('click', function () {
    card6.remove(); 
})

btn5.addEventListener('click', function () {
    card5.remove(); 
})

btn4.addEventListener('click', function () {
    card4.remove(); 
})

btn3.addEventListener('click', function () {
    card3.remove(); 
})

btn2.addEventListener('click', function () {
    card2.remove(); 
})

btn.addEventListener('click', function () {
    card.remove(); 
})*/
/*--------------------------------------------------------------------------------------------*/
/*
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');


function createCard() {
    const card0 = cardTemplate.querySelector('.card').cloneNode(true);
    const card1 = cardTemplate.querySelector('.card').cloneNode(true);
    const card2 = cardTemplate.querySelector('.card').cloneNode(true);
    const card3 = cardTemplate.querySelector('.card').cloneNode(true);
    const card4 = cardTemplate.querySelector('.card').cloneNode(true);
    const card5 = cardTemplate.querySelector('.card').cloneNode(true);
    const card = [card0, card1, card2, card3, card4, card5];

    for(let i = 0; i < initialCards.length; i++) {  
        card[i].querySelector('.card__image').src = initialCards[i].link;
        card[i].querySelector('.card__title').textContent = initialCards[i].name;
        placesList.append(card[i]);
        card[i].querySelector('.card__delete-button').addEventListener('click', function() {
            const item = card[i].closest('.card');
            item.remove();
        })
    }
    
}
createCard()
*/
/*
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function deleteCard(a) {
    a.delete;
}

function createCard(a) {
    const card = []
    const delbutton = cardTemplate.querySelector('.card__delete-button');

    for(let i = 0; i < initialCards.length; i++) {
        const card0 = cardTemplate.querySelector('.card').cloneNode(true);  
        card0.querySelector('.card__image').src = a[i].link;
        card0.querySelector('.card__title').textContent = a[i].name;
        card.append(card0);
        card0.querySelector('.card__delete-button').addEventListener('click', deleteCard(card0));
    }
    console.log(card)
    placesList.append(card);
    
}


createCard(initialCards);*/


const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function deleteCard (item) {
    item.remove();
}

function createCard (array) {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true); 
    const delButton = cardItem.querySelector('.card__delete-button');

    cardItem.querySelector('.card__image').src = array.link;
    cardItem.querySelector('.card__title').textContent = array.name;

    delButton.addEventListener('click', function () {
        deleteCard(cardItem)
    })

    return cardItem;
}

function append (card) {
    placesList.append(card);
}

initialCards.forEach(function (item) {
  append(createCard(item));  
})