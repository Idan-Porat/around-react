import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import './index.css';

function App() {

  // Edit profile popup state.
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  // Add new image popup state.
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  // Edit avatar image popup state.
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  // Popup image state.
  const [isImageModalOpen, setImageModalOpen] = React.useState(false);

  // The link and name of the popup image.
  const [selectedCard, setSelectedCard] = React.useState({});

  // Delete image from the gallery popup state.
  const [isDeleteImagePopupOpen, setIsDeleteImagePopupOpen] = React.useState(false);

  const handleDeleteImageClick = (newSelectedCard) => {
    setSelectedCard(newSelectedCard)
    setIsDeleteImagePopupOpen(true) // state that toggles modal.
  }

  const handleCardClick = (newSelectedCard) => {
    setSelectedCard(newSelectedCard)
    setImageModalOpen(true) // state that toggles modal. 
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsDeleteImagePopupOpen(false)
    setImageModalOpen(false);
  }

  return (
    <div className="root__wrapper">
      <Header />
      <Main onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCloseAllPopups={closeAllPopups}
        cardClickHandler={handleCardClick}
        onDeleteImagePopupOpen={handleDeleteImageClick}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isImageModalOpen={isImageModalOpen}
        isDeleteImagePopupOpen={isDeleteImagePopupOpen}
        cardData={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
