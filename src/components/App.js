import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import './index.css';

function App() {
  return (
    <div>
      <div className="popup popup_theme_edit">
        <div className="popup__container popup__container_theme_edit">
          <button type="button" className="popup__close-button" aria-label="close button"></button>
          <form className="popup__input-container" name="form" novalidate>
            <fieldset className="popup__set">
              <h2 className="popup__header">Edit Profile</h2>
              <label className="popup__field">
                <input placeholder="Name" id="name-input" className="popup__item popup__item_type_name" name="fullName"
                  type="text" required minlength="2" maxlength="40" />
                <span className="popup__item-error name-input-error"></span>
              </label>
              <label className="popup__field">
                <input placeholder="About Me" id="about-input" className="popup__item popup__item_type_career"
                  name="career" type="text" required minlength="2" maxlength="200" />
                <span className="popup__item-error about-input-error"></span>
              </label>
              <button className="popup__submit-button popup__submit-button_disabled" type="submit"
                aria-label="sumbit button">Save</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_theme_edit-avatar">
        <div className="popup__container popup__container_theme_edit">
          <button type="button" className="popup__close-button" aria-label="close button"></button>
          <form className="popup__input-container" name="form" novalidate>
            <fieldset className="popup__set">
              <h2 className="popup__header">Change profile picture</h2>
              <label className="popup__field">
                <input placeholder="Image link" id="avatar-input" className="popup__item popup__item_type_avatar"
                  name="image" type="url" required />
                <span className="popup__item-error avatar-input-error"></span>
              </label>
              <button className="popup__submit-button popup__submit-button_disabled" type="submit"
                aria-label="sumbit button">Save</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_theme_add-photo">
        <div className="popup__container popup__container_theme_edit">
          <button type="button" className="popup__close-button" aria-label="close button"></button>
          <form className="popup__input-container" name="form" novalidate>
            <fieldset className="popup__set">
              <h2 className="popup__header">New place</h2>
              <label className="popup__field">
                <input placeholder="Title" id="title-input" className="popup__item popup__item_type_photo-title"
                  name="title" type="text" required minlength="1" maxlength="30" />
                <span className="popup__item-error title-input-error"></span>
              </label>
              <label className="popup__field">
                <input placeholder="Image link" id="url-input" className="popup__item popup__item_type_url"
                  name="link" type="url" required />
                <span className="popup__item-error url-input-error"></span>
              </label>
              <button className="popup__submit-button popup__submit-button_disabled" type="submit"
                aria-label="sumbit button">Create</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="popup popup_theme_open-photo">
        <div className="popup__container popup__container_theme_open-photo">
          <button type="button" className="popup__close-button" aria-label="close button"></button>
          <figure>
            <img className="popup__open-image" alt="popup image" src="#" />
            <figcaption className="popup__open-image-caption"></figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_theme_delete-photo">
        <div className="popup__container popup__container_theme_edit">
          <button type="button" className="popup__close-button" aria-label="close button"></button>
          <h2 className="popup__header">Are you sure?</h2>
          <form className="popup__input-container" name="form" novalidate>
            <button type="submit" className="popup__submit-button">Yes</button>
          </form>
        </div>
      </div>
      <div className="root__wrapper">
        <Header />
        <Main/>
        <Footer/>
      </div>
      <template id="elements__template">
        <il className="elements__card">
          <button type="button" className="elements__delete-button"></button>
          <div className="elements__pic"></div>
          <div className="elements__inner-container">
            <h2 className="elements__title"></h2>
            <div className="elements__likes-container">
              <button type="button" className="elements__like-button"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </il>
      </template>
    </div>
  );
}

export default App;
