import { useState, useEffect, useContext } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

  const userContext = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then(data => {
        const cards = data.map(item => {
          return {
            id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
            ownerId: item.owner._id,
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
          <img className="profile__avatar" src={userContext.avatar} alt="аватар" />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userContext.name}</h1>
          <button className="profile__edit-btn opacity" type="button" onClick={props.onEditProfile} />
          <p className="profile__job">{userContext.about}</p>
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