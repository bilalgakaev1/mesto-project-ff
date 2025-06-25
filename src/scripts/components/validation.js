const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
  };
  
  export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage)
    } else {
      inputElement.setCustomValidity("")
    }
    
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  
  function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", "")
      buttonElement.classList.add('button_inactive');
    } else {
      buttonElement.classList.remove('button_inactive');
      buttonElement.removeAttribute("disabled", "")
    }
  }
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement)
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(function(formElement) {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        })
        setEventListeners(formElement)
    })
  }
  enableValidation()