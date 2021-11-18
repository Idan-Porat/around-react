import React from 'react';
import reactLogo from '../../images/React-Native-Logo.png';

function Main() {


  

  function handleEditAvatarClick(e) {
    if (e.target.classList.contains("popup_open")) {
     
    } else {
      
    }
  }

  function handleEditProfileClick() {

  }

  function handleAddPlaceClick() {

  }



  return (
    <main className="content">
      <section className="profile">
        <div className="avatar">
          <image className="avatar__image" src={reactLogo} alt="avatar-pic"></image>
          <button  type="button" className="avatar__edit"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__full-name">Jacques Cousteau</h1>
          <p className="profile__career">Explorer</p>
          <button onClick={handleEditProfileClick} type="button" className="profile__button" id="editButton"></button>
        </div>
        <button onClick={handleAddPlaceClick} type="button" className="profile__rectangle" id="addPhoto"></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
        </ul>
      </section>
    </main>
  );
}

export default Main;