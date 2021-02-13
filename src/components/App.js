import {useState, useEffect} from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);


  function handleEditAvatarClick() {
    if (isEditAvatarPopupOpen !== true){
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
  }

  function handleEditProfileClick() {
    if (isEditProfilePopupOpen !== true){
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
  }

  function handleAddPlaceClick() {
    if (isAddPlacePopupOpen !== true){
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
  }

  function closeAllPopups() {
    if(isEditAvatarPopupOpen == true) {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    } else if (isEditProfilePopupOpen == true) {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    } else if (isAddPlacePopupOpen == true) {
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
  }


  const avatarPopupOpen = `${isEditAvatarPopupOpen ? 'popup_opened' : ''}`;
  const editPopupOpen = `${isEditProfilePopupOpen ? 'popup_opened' : ''}`;
  const addPopupOpen = `${isAddPlacePopupOpen ? 'popup_opened' : ''}`;



  return (
    <>
      <div className="page">
        <Header />
        <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        />
        <Footer />

        <PopupWithForm onClose={closeAllPopups} isOpen={avatarPopupOpen} name="avatar" title="Обновить аватар" isEditAvatarPopupOpen={false}>
          <div class="popup__form">
            <input class="popup__field popup__field_link-avatar" id="input-linkAvatar" type="url" name="avatar" value="" placeholder="Ссылка на картинку" required />
            <span class="popup__form-field-error" id="input-linkAvatar-error">Вы пропустили это поле.</span>
          </div>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} isOpen={editPopupOpen} name="edit" title="Редактировать профиль" >
          <div class="popup__form">
            <input class="popup__field popup__field_name" id="input-name" type="text" name="name" value="" placeholder="Имя" required minlength="2" maxlength="40" />
            <span class="popup__form-field-error" id="input-name-error">Вы пропустили это поле.</span>
          </div>
          <div class="popup__form">
            <input class="popup__field popup__field_job" id="input-job" type="text" name="about" value="" placeholder="Занятие" required minlength="2" maxlength="200" />
            <span class="popup__form-field-error" id="input-job-error">Вы пропустили это поле.</span>
          </div>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} isOpen={addPopupOpen} name="add" title="Новое место" >
          <div class="popup__form">
            <input class="popup__field popup__field_name-photo" id="input-photo" type="text" name="name" value="" placeholder="Название" required minlength="2" maxlength="30" />
            <span class="popup__form-field-error" id="input-photo-error">Вы пропустили это поле.</span>
          </div>
          <div class="popup__form">
            <input class="popup__field popup__field_link-photo" id="input-link" type="url" name="link" value="" placeholder="Ссылка на картинку" required />
            <span class="popup__form-field-error" id="input-link-error">Вы пропустили это поле.</span>
          </div>
        </PopupWithForm>

        <PopupWithForm name="del" title="Вы уверены?" >
          <input id="" name="cardId" required type="text" hidden />
        </PopupWithForm>


        <ImagePopup />
      </div>
    </>
  );
}

export default App;
