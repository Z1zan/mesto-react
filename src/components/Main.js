import avatar from '../images/Avatar.svg';
import {useState, useEffect} from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userAvatar, setUserAvatar] = useState([avatar]);
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Загрузка...');
  const [cards, setCards] = useState([]);

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
      })
  }, [])

  useEffect(() => {
    api
      .getInitialCards()
      .then(data => {
        const cards = data.map(item => {
          return {
            id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes
          }
        })
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])






  return(
    <main className="main">
      <div className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn opacity" type="button" onClick={props.onEditProfile} />
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-btn opacity" type="button" onClick={props.onAddPlace} />
      </div>
      <div className="elements">
        {cards.map(item => <Card key={item.id} {...item} onCardClick={props.onImgCard}/>)}
      </div>
    </main>
  )
}

export default Main;