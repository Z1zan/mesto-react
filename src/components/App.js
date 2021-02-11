


import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_opened');
    // document.addEventListener('keyup', this._handleEscClose);
  }

  function handleEditProfileClick() {
    document.querySelector('.popup-edit').classList.add('popup_opened');
    // document.addEventListener('keyup', this._handleEscClose);
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup-add').classList.add('popup_opened');
    // document.addEventListener('keyup', this._handleEscClose);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" >
          <div class="popup__form">
            <input class="popup__field popup__field_name" id="input-name" type="text" name="name" value="" placeholder="Имя" required minlength="2" maxlength="40" />
            <span class="popup__form-field-error" id="input-name-error">Вы пропустили это поле.</span>
          </div>
          <div class="popup__form">
            <input class="popup__field popup__field_job" id="input-job" type="text" name="about" value="" placeholder="Занятие" required minlength="2" maxlength="200" />
            <span class="popup__form-field-error" id="input-job-error">Вы пропустили это поле.</span>
          </div>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" >
          <div class="popup__form">
            <input class="popup__field popup__field_link-avatar" id="input-linkAvatar" type="url" name="avatar" value="" placeholder="Ссылка на картинку" required />
            <span class="popup__form-field-error" id="input-linkAvatar-error">Вы пропустили это поле.</span>
          </div>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" >
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
