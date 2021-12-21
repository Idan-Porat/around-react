import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { api } from '../utils/api.js';
import DeletePhotoPopup from './DeletePhotoPopup';
function App() {

  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({});
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


  const handleCardLike = (card) => {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    if (isLiked) {
      api.unLikeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch((error) => console.log(error));
    } else {
      api.likeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch((error) => console.log(error));
    }
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      }).catch((error) => console.log(error))
  }, [])

  const getUserInfo = async () => {
    try {
      const callData = await api.getUserInfo();
      callData && setCurrentUser(callData);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getUserInfo();
  }, []);


  const handleDeleteCard = async () => {
    const id = selectedCard._id;
    try {
      await api.deleteCard(id);
      setCards(cards.filter((card) => card._id !== id))
      closeAllPopups();
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleUpdateUser = async (data) => {
    try {
      return api
        .setUserInfo(data)
        .then((res) => {
          setCurrentUser(res)
          closeAllPopups();
        })
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try {
      return await api
        .setUserImage(data.avatar).then(res => {
          setCurrentUser(res)
          closeAllPopups();
        })
    } catch (error) {
      console.log(error);
    }
  };


  const handleAddPlaceSubmit = async (card) => {
    try {
      await api.createNewCard(card).then((res) => {
        setCards((Cards) => {
          return [res].concat(Cards)
        })
        closeAllPopups();
      })
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="root">
      <div className="root__wrapper">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCloseAllPopups={closeAllPopups}
            cardClickHandler={handleCardClick}
            onDeleteImagePopupOpen={handleDeleteImageClick}
            cards={cards}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isImageModalOpen={isImageModalOpen}
            isDeleteImagePopupOpen={isDeleteImagePopupOpen}
            cardData={selectedCard}
            onCardLike={handleCardLike}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            updateCurrentUser={handleUpdateUser} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            addNewPhoto={handleAddPlaceSubmit} />
          <DeletePhotoPopup
            isOpen={isDeleteImagePopupOpen}
            onClose={closeAllPopups}
            deleteCard={handleDeleteCard} />
          <ImagePopup isOpen={isImageModalOpen} cardObj={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>

  );
}

export default App;
