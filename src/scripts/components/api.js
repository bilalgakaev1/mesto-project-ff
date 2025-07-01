const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-41',
  headers: {
    authorization: '38b02706-48f5-4d2c-a034-55c008e4c9a7',
    'Content-Type': 'application/json'
  }
}

export function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
  export function getUsers() {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'GET',
      headers: config.headers
    }) 
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
  export function updateAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatar.value
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
  export function updateProfil(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: name.textContent,
        about: about.textContent,
      })
    })
    .then(res => {
      if (res.ok) {
        console.log('Данные профиля успешно обновлены!');
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }) 
  }
  
  export function addCard (name, link) {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: `${name.value}`,
        link: `${link.value}`
      })
    })
    .then(res => {
      if (res.ok) {
        console.log('Вы добавили карточку!');
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  export function deleteCardApi (idCard) {
    return fetch(`${config.baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: config.headers
    })
    .then((res) => {
            if (res.ok) {
              
              console.log('Карточка удалена');
              
            } else {
              Promise.reject(`Ошибка: ${res.status}`);
            }
          })
  }

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId} `, {
    method: "DELETE",
    headers: config.headers
  })
  .then((res) => {
    if (res.ok) {
      console.log('Dont Liked');
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  })
}

export function addLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId} `, {
        method: "PUT",
        headers: config.headers
      })
      .then((res) => {
        if (res.ok) {
          console.log('Liked');
        } else {
          Promise.reject(`Ошибка: ${res.status}`);
        }
      })
}