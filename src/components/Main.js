import { useState, useEffect, useContext } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

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
      .catch(err => console.log(err));
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card.id, isLiked)
      .then((newCard) => {
        console.log("cards", cards.id);
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c.id === card.id ? newCard : c);

        // Обновляем стейт
        setCards(newCards);
        console.log(newCards)
      })
      .catch(err => console.log(err));
}

function handleCardDelete(card) {
  api.removeCard(card.id).then(() => {
    const newCards = cards.filter(c => c.id !== card.id);
    // Обновляем стейт
    setCards(newCards);
  })
  .catch(err => console.log(err));
}



  return(
    <main className="main">
      <div className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-btn opacity" type="button" onClick={props.onEditProfile} />
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-btn opacity" type="button" onClick={props.onAddPlace} />
      </div>
      <div className="elements">
        {cards.map(item => <Card key={item.id} {...item} onCardClick={props.onImgCard} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />)}
      </div>
    </main>
  )
}

export default Main;