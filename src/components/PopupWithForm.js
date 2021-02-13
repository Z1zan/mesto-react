function PopupWithForm(props) {
  return(
    <>
      <form className={`popup popup-${props.name} popup-form ${props.isOpen}`} name={`${props.name}Popup`}>
        <div className="popup__container">
          <button className={`popup__close-btn popup-${props.name}__close-btn opacity`} type="reset" onClick={props.onClose}></button>
          <h2 className="popup__title">{props.title}</h2>
          <>{props.children}</>
          <button className={`popup__submit-btn submit-${props.name}-btn`} type="submit">Сохранить</button>
        </div>
        <div className={`popup__overlay overlay-${props.name}`}></div>
      </form>

    </>
  )
}

export default PopupWithForm;

{/* 
      <form class="popup popup-edit popup-form" name="changeProfile">
        <div class="popup__container"> 
          <button class="popup__close-btn popup-edit__close-btn opacity" type="reset"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <div class="popup__form">
            <input class="popup__field popup__field_name" id="input-name" type="text" name="name" value="" placeholder="Имя" required minlength="2" maxlength="40" />
            <span class="popup__form-field-error" id="input-name-error">Вы пропустили это поле.</span>
          </div>
          <div class="popup__form">
            <input class="popup__field popup__field_job" id="input-job" type="text" name="about" value="" placeholder="Занятие" required minlength="2" maxlength="200" />
            <span class="popup__form-field-error" id="input-job-error">Вы пропустили это поле.</span>
          </div>
          <button class="popup__submit-btn submit-edit-btn" type="submit">Сохранить</button>
        </div>
        <div class="popup__overlay overlay-edit"></div>
      </form>

      <form class="popup popup-avatar" name="addAvatar">
        <div class="popup__container">
          <button class="popup__close-btn popup-avatar__close-btn opacity" type="reset"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <div class="popup__form">
            <input class="popup__field popup__field_link-avatar" id="input-linkAvatar" type="url" name="avatar" value="" placeholder="Ссылка на картинку" required />
            <span class="popup__form-field-error" id="input-linkAvatar-error">Вы пропустили это поле.</span>
          </div>
          <button class="popup__submit-btn submit-avatar-btn" type="submit">Сохранить</button>
        </div>
        <div class="popup__overlay overlay-avatar"></div>
      </form>

      <form class="popup popup-add popup-form" name="addPhoto">
        <div class="popup__container"> 
          <button class="popup__close-btn popup-add__close-btn opacity" type="reset"></button>
          <h2 class="popup__title">Новое место</h2>
          <div class="popup__form">
            <input class="popup__field popup__field_name-photo" id="input-photo" type="text" name="name" value="" placeholder="Название" required minlength="2" maxlength="30" />
            <span class="popup__form-field-error" id="input-photo-error">Вы пропустили это поле.</span>
          </div>
          <div class="popup__form">
            <input class="popup__field popup__field_link-photo" id="input-link" type="url" name="link" value="" placeholder="Ссылка на картинку" required />
            <span class="popup__form-field-error" id="input-link-error">Вы пропустили это поле.</span>
          </div>
          <button class="popup__submit-btn submit-add-btn" type="submit">Создать</button>
        </div>
        <div class="popup__overlay overlay-add"></div>
      </form>

        <form class="popup popup-del" name="delPhoto">
          <div class="popup__container">
            <button class="popup__close-btn popup-del__close-btn opacity" type="reset"></button>
            <h2 class="popup__title">Вы уверены?</h2>
            <input id="" name="cardId" required type="text" hidden />
            <button class="popup__submit-btn submit-del-btn" type="submit">Да</button>
          </div>
          <div class="popup__overlay overlay-del"></div>
        </form> */}
