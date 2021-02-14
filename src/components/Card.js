
function Card(props) {


  return (
    <div className="element">
      <img className="element__image" src={props.link} alt={props.name} />
      <div className="element__text">
        <p className="element__name">{props.name}</p>
        <button className="element__like-btn opacity" type="button"></button>
      </div>
      <span className="element__like-number">{props.likes.length}</span>
      <button className="element__trash" type="button"></button>
    </div>
  )
}

export default Card;