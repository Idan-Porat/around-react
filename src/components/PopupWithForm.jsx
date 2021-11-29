import React from 'react';

function PopupWithForm(props) {
    const {name, isOpen, onClose, title, btnSubmitTitle, children} = props;
    return (
        <div>
            <div className={`popup popup_theme_${name} ${isOpen && 'popup_open'}`}>
                <div className="popup__container popup__container_theme_edit">
                    <button type="button" className="popup__close-button" onClick={onClose} aria-label="close button"></button>
                    <form className="popup__input-container" name="form" noValidate>
                        <fieldset className="popup__set">
                            <h2 className="popup__header">{title}</h2>
                            {children}
                            <button className="popup__submit-button popup__submit-button_disabled" type="submit"
                                aria-label="sumbit button">{btnSubmitTitle}</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;