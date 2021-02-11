import avatar from '../images/Avatar.svg';;

function Main() {


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


  return(
    <main className="main">
      <div className="profile">
        <img className="profile__avatar" src={avatar} alt="аватар" />
        <div className="profile__avatar-overlay" onClick={handleEditAvatarClick} ></div>
        <div className="profile__info">
          <h1 className="profile__name">Жак Ив Куско</h1>
          <button className="profile__edit-btn opacity" type="button" onClick={handleEditProfileClick}></button>
          <p className="profile__job">Иследователь</p>
        </div>
        <button className="profile__add-btn opacity" type="button" onClick={handleAddPlaceClick}></button>
      </div>
      <div className="elements">
      </div>
    </main>
  )
}

export default Main;