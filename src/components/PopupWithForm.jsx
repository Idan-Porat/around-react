import React from 'react';

function PopupWithForm(props) {
    return (
        <div>
            <div className={`popup popup_theme_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
                <div className="popup__container popup__container_theme_edit">
                    <button type="button" className="popup__close-button" onClick={props.onClose} aria-label="close button"></button>
                    <form className="popup__input-container" name="form" noValidate>
                        <fieldset className="popup__set">
                            <h2 className="popup__header">{props.title}</h2>
                            {props.children}
                            <button className="popup__submit-button popup__submit-button_disabled" type="submit"
                                aria-label="sumbit button">{props.btnSubmitTitle}</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;

/*
<div className={`popup popup_type_${props.name}`}>
    <div className="popup__overlay"></div>
    <div className="popup__container">
        <button
            type="button"
            className={`popup__closeBtn popup__closeBtn_${props.name}`}
            aria-label="Close"
        ></button>
        <form
            className={`form form_type_${props.name}`}
            name={`${props.name}`}
            noValidate
        >
            <h2 className="form__heading">{props.title}</h2>
            <fieldset className="form__fieldset">
                <button type="submit" className="form__submit"></button>
            </fieldset>
        </form>
    </div>
</div>
*/