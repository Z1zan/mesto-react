import React from 'react';
import { useState, useEffect } from 'react';

import avatar from '../images/Avatar.svg'

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {


  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }


  const avatarPopupOpen = `${isEditAvatarPopupOpen ? 'popup_opened' : ''}`;
  const editPopupOpen = `${isEditProfilePopupOpen ? 'popup_opened' : ''}`;
  const addPopupOpen = `${isAddPlacePopupOpen ? 'popup_opened' : ''}`;
  const imgPopupOpen = `${isImagePopupOpen ? 'popup_opened' : ''}`;

  const [currentUser, setCurrentUser] = useState({});
  console.log("user", currentUser.about);

  useEffect(() => {
    api
      .getUserInfo(currentUser)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err))
  }, [])

  function handleUpdateUser(item) {
    api
      .setUserInfo(item)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(item) {
    api
      .setUserAvatar(item)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main 
          onEditAvatar={handleEditAvatarClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onImgCard={handleCardClick}
          />
          <Footer />

          <EditAvatarPopup setAvatar={handleUpdateAvatar} isOpen={avatarPopupOpen} onClose={closeAllPopups} />

          <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={editPopupOpen} onClose={closeAllPopups} />

          <PopupWithForm onClose={closeAllPopups} isOpen={addPopupOpen} name="add" title="Новое место" >
            <div className="popup__form">
              <input className="popup__field popup__field_name-photo" id="input-photo" type="text" name="name" defaultValue="" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="popup__form-field-error" id="input-photo-error">Вы пропустили это поле.</span>
            </div>
            <div className="popup__form">
              <input className="popup__field popup__field_link-photo" id="input-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required />
              <span className="popup__form-field-error" id="input-link-error">Вы пропустили это поле.</span>
            </div>
          </PopupWithForm>

          <PopupWithForm name="del" title="Вы уверены?" >
            <input id="" name="cardId" required type="text" hidden />
          </PopupWithForm>

          <ImagePopup card={selectedCard} isOpen={imgPopupOpen} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App;
