import React from 'react';

function PopupWithImage(props) {
    const { cardData } = props
    return (
        <>
            <div className={`popup popup_theme_open-photo ${props.isOpen ? 'popup_open' : ''}`}>
                <div className="popup__container popup__container_theme_open-photo">
                    <button type="button" className="popup__close-button" onClick={props.onClose} aria-label="close button"></button>
                    <figure>
                        <img className="popup__open-image" alt="" src={cardData.link} />
                        <figcaption className="popup__open-image-caption">{cardData.name}</figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default PopupWithImage;