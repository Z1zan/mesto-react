import { useState, useContext, useEffect, useRef } from 'react';

import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditAvatarPopup(props) {


  const avatarRef = useRef();



  const [avatar, setAvatar] = useState([]);
  
  // const currentUser = useContext(CurrentUserContext);

  // useEffect(() => {
  //   setAvatar(currentUser.avatar);
  // }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
  
    props.setAvatar({
      avatar
    });
  }

  function handleChange(e) {
    setAvatar(e.target.value);
  }



  

  return (

    <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} name="avatar" title="Обновить аватар">
    <div className="popup__form">
      <input value={avatar} onChange={handleChange} className="popup__field popup__field_link-avatar" id="input-linkAvatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
      <span className="popup__form-field-error" id="input-linkAvatar-error">Вы пропустили это поле.</span>
    </div>
  </PopupWithForm>

  )
}

export default EditAvatarPopup;