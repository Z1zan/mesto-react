import React from 'react';
import { useState, useEffect } from 'react';

import avatar from '../images/Avatar.svg'

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';

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

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

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

          <PopupWithForm onClose={closeAllPopups} isOpen={avatarPopupOpen} name="avatar" title="Обновить аватар">
            <div className="popup__form">
              <input className="popup__field popup__field_link-avatar" id="input-linkAvatar" type="url" name="avatar" defaultValue="" placeholder="Ссылка на картинку" required />
              <span className="popup__form-field-error" id="input-linkAvatar-error">Вы пропустили это поле.</span>
            </div>
          </PopupWithForm>

          <PopupWithForm onClose={closeAllPopups} isOpen={editPopupOpen} name="edit" title="Редактировать профиль" >
            <div className="popup__form">
              <input className="popup__field popup__field_name" id="input-name" type="text" name="name" defaultValue="" placeholder="Имя" required minLength="2" maxLength="40" />
              <span className="popup__form-field-error" id="input-name-error">Вы пропустили это поле.</span>
            </div>
            <div className="popup__form">
              <input className="popup__field popup__field_job" id="input-job" type="text" name="about" defaultValue="" placeholder="Занятие" required minLength="2" maxLength="200" />
              <span className="popup__form-field-error" id="input-job-error">Вы пропустили это поле.</span>
            </div>
          </PopupWithForm>

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
