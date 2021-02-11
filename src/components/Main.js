import avatar from '../images/Avatar.svg';;

function Main(props) {





  return(
    <main className="main">
      <div className="profile">
        <img className="profile__avatar" src={avatar} alt="аватар" />
        <div className="profile__avatar-overlay" onClick={props.onEditAvatar} ></div>
        <div className="profile__info">
          <h1 className="profile__name">Жак Ив Куско</h1>
          <button className="profile__edit-btn opacity" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__job">Иследователь</p>
        </div>
        <button className="profile__add-btn opacity" type="button" onClick={props.onAddPlace}></button>
      </div>
      <div className="elements">
      </div>
    </main>
  )
}

export default Main;