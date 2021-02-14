
function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }


  return (
    <div className="element">
      <img className="element__image" onClick={handleClick} src={props.link} alt={props.name} />
      <div className="element__text">
        <p className="element__name">{props.name}</p>
        <button className="element__like-btn opacity" type="button" />
      </div>
      <span className="element__like-number">{props.likes.length}</span>
      <button className="element__trash" type="button" />
    </div>
  )
}

export default Card;