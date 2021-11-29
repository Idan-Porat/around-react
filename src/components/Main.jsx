import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import Card from './Card.jsx';
import Api from '../utils/api.js';

export const api = new Api({
  baseURL: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "001651b9-e63d-4f3d-8d65-ab968b3111ee",
    "Content-Type": "application/json"
  }
});

function Main(props) {

  const { onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCloseAllPopups, isImageModalOpen, cardData
    , onDeleteImagePopupOpen, cardClickHandler, isDeleteImagePopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen,
    isEditAvatarPopupOpen } = props;

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }).catch((error) => console.log(error))
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      }).catch((error) => console.log(error))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="avatar">
          <div className="avatar__image" style={{ backgroundImage: `url(${userAvatar})` }} alt="avatar-pic"></div>
          <button onClick={onEditAvatarClick} type="button" className="avatar__edit"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__full-name">{userName}</h1>
          <p className="profile__career">{userDescription}</p>
          <button onClick={onEditProfileClick} type="button" className="profile__button" id="editButton"></button>
        </div>
        <button onClick={onAddPlaceClick} type="button" className="profile__rectangle" id="addPhoto"></button>
      </section>

      <PopupWithForm name="edit-avatar" title="Change profile picture" btnSubmitTitle="Save" isOpen={isEditAvatarPopupOpen} onClose={onCloseAllPopups}>
        <label className="popup__field">
          <input placeholder="Image link" id="avatar-input" className="popup__item popup__item_type_avatar"
            name="image" type="url" required />
          <span className="popup__item-error avatar-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="edit" title="Edit Profile" btnSubmitTitle="Save" isOpen={isEditProfilePopupOpen} onClose={onCloseAllPopups}>
        <label className="popup__field">
          <input placeholder="Name" id="name-input" className="popup__item popup__item_type_name" name="fullName"
            type="text" required minLength="2" maxLength="40" />
          <span className="popup__item-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input placeholder="About Me" id="about-input" className="popup__item popup__item_type_career"
            name="career" type="text" required minLength="2" maxLength="200" />
          <span className="popup__item-error about-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="add-photo" title="New place" btnSubmitTitle="Create" isOpen={isAddPlacePopupOpen} onClose={onCloseAllPopups}>
        <label className="popup__field">
          <input placeholder="Title" id="title-input" className="popup__item popup__item_type_photo-title"
            name="title" type="text" required minLength="1" maxLength="30" />
          <span className="popup__item-error title-input-error"></span>
        </label>
        <label className="popup__field">
          <input placeholder="Image link" id="url-input" className="popup__item popup__item_type_url"
            name="link" type="url" required />
          <span className="popup__item-error url-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="delete-photo" title="Are you sure?" btnSubmitTitle="Yes" isOpen={isDeleteImagePopupOpen} onClose={onCloseAllPopups}>
      </PopupWithForm>

      <ImagePopup isOpen={isImageModalOpen} onClose={onCloseAllPopups} cardData={cardData}></ImagePopup>

      <section className="elements">
        <ul className="elements__container">
          {
            cards.map(card => (
              <Card card={card} cardClickHandler={cardClickHandler} onDeleteImagePopupOpen={onDeleteImagePopupOpen} />
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;