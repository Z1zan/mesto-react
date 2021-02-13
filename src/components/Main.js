import avatar from '../images/Avatar.svg';
import {useState, useEffect} from 'react';
import api from '../utils/Api.js';

function Main(props) {

  const [userAvatar, setUserAvatar] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [])






  return(
    <main className="main">
      <div className="profile">
        <img className="profile__avatar" src={userAvatar} alt="аватар" />
        <div className="profile__avatar-overlay" onClick={props.onEditAvatar} ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn opacity" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-btn opacity" type="button" onClick={props.onAddPlace}></button>
      </div>
      <div className="elements">
      </div>
    </main>
  )
}

export default Main;