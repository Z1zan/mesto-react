
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