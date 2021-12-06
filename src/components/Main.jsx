import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import Card from './Card.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.jsx';



function Main(props) {

  const { onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCloseAllPopups, isImageModalOpen, cardData
    , onDeleteImagePopupOpen, cardClickHandler, isDeleteImagePopupOpen, cards, onCardLike } = props;

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="avatar">
          <div className="avatar__image" style={{ backgroundImage: `url(${currentUser.avatar})` }} alt="avatar-pic"></div>
          <button onClick={onEditAvatarClick} type="button" className="avatar__edit"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__full-name">{currentUser.name}</h1>
          <p className="profile__career">{currentUser.about}</p>
          <button onClick={onEditProfileClick} type="button" className="profile__button" id="editButton"></button>
        </div>
        <button onClick={onAddPlaceClick} type="button" className="profile__rectangle" id="addPhoto"></button>
      </section>

      <ImagePopup isOpen={isImageModalOpen} onClose={onCloseAllPopups} cardData={cardData}></ImagePopup>

      <section className="elements">
        <ul className="elements__container">
          {
            cards.map(card => (
              <Card onCardDelete={onDeleteImagePopupOpen} onCardLike={onCardLike} card={card} key={card._id} cardClickHandler={cardClickHandler} onDeleteImagePopupOpen={onDeleteImagePopupOpen} />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;