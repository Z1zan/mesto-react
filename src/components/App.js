


import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm />

        <form className="popup popup-img" name="fullImg">
          <div className="popup-img__container">
            <button className="popup__close-btn popup-img__close-btn opacity" type="reset"></button>
            <img className="popup-img__img" alt="" src="#" />
            <p className="popup-img__name"></p>
          </div>
          <div className="popup__overlay overlay-img"></div>
        </form>

      </div>
    </>
  );
}

export default App;
