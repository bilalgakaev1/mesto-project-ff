const showInputError = (formElement, inputElement, errorMessage, inputError) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputError);
    errorElement.textContent = errorMessage;
  };
  
  export const hideInputError = (formElement, inputElement, inputError) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputError);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, inputError) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
      inputElement.setCustomValidity("")
    }
    
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputError);
    } else {
      hideInputError(formElement, inputElement, inputError);
    }
  };
  
  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  
  function toggleButtonState (inputList, buttonElement, inactiveButton) {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", "")
      buttonElement.classList.add(inactiveButton);
    } else {
      buttonElement.classList.remove(inactiveButton);
      buttonElement.removeAttribute("disabled", "")
    }
  }
  
  const setEventListeners = (formElement, input, button, inactiveButton, inputErrorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(input));
    const buttonElement = formElement.querySelector(button);
    toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, inputErrorClass);
        toggleButtonState(inputList, buttonElement, inactiveButton)
      });
    });
  };
  
  const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(function(formElement) {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        })
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass)
    })
  }
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'form__input_type_error'
  })
