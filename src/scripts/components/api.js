
export function getCards() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-41/cards', {
      method: 'GET',
      headers: {
        authorization: '38b02706-48f5-4d2c-a034-55c008e4c9a7'
      }
    }) .then((card) => {return card.json()})
    .catch((err) => {
      console.log(err)
    })
  }
  
  export function getUsers() {
    return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me', {
      method: 'GET',
      headers: {
        authorization: '38b02706-48f5-4d2c-a034-55c008e4c9a7'
      }
    }) .then((user) => {return user.json()})
    .catch((err) => {console.log(err)})
  }
  
  export function updateAvatar(avatar) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: '38b02706-48f5-4d2c-a034-55c008e4c9a7',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar.value
      })
    })
  }
  
  export function updateProfil(name, about) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '38b02706-48f5-4d2c-a034-55c008e4c9a7',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.textContent,
        about: about.textContent,
      })
    })

  }
  
  export function addCard (name, link) {
    return fetch('https://nomoreparties.co/v1/wff-cohort-41/cards', {
      method: 'POST',
      headers: {
        authorization: '38b02706-48f5-4d2c-a034-55c008e4c9a7',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name.value}`,
        link: `${link.value}`
      })
    })
  }