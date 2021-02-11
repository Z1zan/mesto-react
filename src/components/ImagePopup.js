function ImagePopup() {
  return(
  <form className="popup popup-img" name="fullImg">
    <div className="popup-img__container">
      <button className="popup__close-btn popup-img__close-btn opacity" type="reset"></button>
      <img className="popup-img__img" alt="" src="#" />
      <p className="popup-img__name"></p>
    </div>
    <div className="popup__overlay overlay-img"></div>
  </form>
  )
}

export default ImagePopup;