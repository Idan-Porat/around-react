import FormValidator from "./FormValidator";

export const popupConfig = { 
    formSelector: ".popup", 
    inputSelectorSet: ".popup__set", 
    inputSelector: ".popup__item", 
    submitButtonSelector: ".popup__submit-button", 
    inactiveButtonClass: "popup__submit-button_disabled", 
    inputErrorClass: "popup__item-error", 
    errorClass: "popup__item-error_active", 
    errorInputSelector: "popup__item_theme_red", 
    imageModalWindow: '.popup_theme_open-photo', 
    editModalWindow:'.popup_theme_edit', 
    addPhotoModalWindow:'.popup_theme_add-photo', 
    editAvatarModalWindow:'.popup_theme_edit-avatar', 
    deleteCardModalWindow:'.popup_theme_delete-photo', 
    elementsContainer: ".elements__container", 
}; 

export const profileConfig = { 
    profileTitle: '.profile__full-name', 
    profileDescription: '.profile__career', 
    avatarImage:'.avatar__image', 
}; 