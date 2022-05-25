import React from 'react';
// import buttomLike from '../images/buttom-like.svg';
import closeIcon from '../images/Close-Icon.svg';
// import likeActive from '../images/like-active.svg';
// import trash from '../images/Trash.svg';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  // console.log('hi');
  // console.log(isAddPlacePopupOpen)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="popup-user" title="Редактировать профиль" children={
        <>
          <input id="popup__username" type="text" value="Жак-Ив Кусто" className="popup__input" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__username-error popup__input-error"></span>
          <input id="popup__user-about" type="text" value="Исследователь океана" className="popup__input" name="about" placeholder="О себе.." required minLength="2" maxLength="40" />
          <span className="popup__user-about-error popup__input-error"></span>
        </>
      } />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="update-avatar" title="Обновить аватар" children={
        <>
          <input id="popup__avatar-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__avatar-link-error popup__input-error"></span>
        </>
      } />
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="popup-create" title="Новое место" children={
        <>
          <input id="popup__place-name" type="text" className="popup__input" name="name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__place-name-error popup__input-error"></span>
          <input id="popup__place-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__place-link-error popup__input-error"></span>
        </>
      } />

      {/* <section id="popup-user" className="popup">
        <div className="popup__container">
          <button id="popup-user-close" type="button" className="popup__button-close"><img className="popup__button-close-img"
            src={closeIcon} alt="Закрыть" />
          </button>
          <h2 className="popup__edit-text">Редактировать профиль</h2>
          <form id="form-profile" className="popup__form" name="profileForm" action="#" novalidate>
            <fieldset className="popup__inputs">
              <input id="popup__username" type="text" value="Жак-Ив Кусто" className="popup__input" name="name"
                placeholder="Имя" required minlength="2" maxlength="40" />
              <span className="popup__username-error popup__input-error"></span>
              <input id="popup__user-about" type="text" value="Исследователь океана" className="popup__input"
                name="about" placeholder="О себе.." required minlength="2" maxlength="40" />
              <span className="popup__user-about-error popup__input-error"></span>
              <button className="popup__button-save" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
        <div id="overlayProfile" className="popup__overlay"></div>
      </section> */}
      {/* <section id="popup-create" className="popup">
        <div className="popup__container">
          <button id="popup-card-close" type="button" className="popup__button-close"><img className="popup__button-close-img"
            src={closeIcon} alt="Закрыть" />
          </button>
          <h2 className="popup__edit-text">Новое место</h2>
          <form id="form-card" className="popup__form" name="formPlace" action="#" novalidate>
            <fieldset className="popup__inputs">
              <input id="popup__place-name" type="text" className="popup__input" name="name" placeholder="Название"
                minlength="2" maxlength="30" required />
              <span className="popup__place-name-error popup__input-error"></span>

              <input id="popup__place-link" type="url" className="popup__input" name="link"
                placeholder="Ссылка на картинку" required />
              <span className="popup__place-link-error popup__input-error"></span>
              <button id="create-button" className="popup__button-save popup__button-save_inactive" type="submit"
                disabled>Сохранить</button>
            </fieldset>
          </form>
        </div>
        <div id="overlayCreateCard" className="popup__overlay"></div>
      </section>
      
      <section id="popup-delete-card" className="popup">
        <div className="popup__container popup__container_delete-card">
          <button id="popup-delete-card-close" type="button" className="popup__button-close"><img className="popup__button-close-img"
            src={closeIcon} alt="Закрыть" />
          </button>
          <form className="popup__form" name="formDeleteCard" action="#" novalidate>
            <h2 className="popup__edit-text popup__edit-text_delete-card">Вы уверенны?</h2>
            <button className="popup__button-save popup__delete-card-yes" type="submit">Да</button>
          </form>
        </div>
        <div className="popup__overlay"></div>
      </section>
      <section id="popup-update-avatar" className="popup">
        <div className="popup__container popup__container_update-avatar">
          <button id="popup-avatar-close" type="button" className="popup__button-close"><img className="popup__button-close-img"
            src={closeIcon} alt="Закрыть" />
          </button>
          <h2 className="popup__edit-text popup__edit-text_update-avatar">Обновить аватар</h2>
          <form id="form-avatar" className="popup__form" name="formAvatar" action="#" novalidate>
            <fieldset className="popup__inputs">
              <input id="popup__avatar-link" type="url" className="popup__input" name="link"
                placeholder="Ссылка на картинку" required />
              <span className="popup__avatar-link-error popup__input-error"></span>
              <button className="popup__button-save popup__button-save_inactive" type="submit"
                disabled>Сохранить</button>
            </fieldset>
          </form>
        </div>
        <div className="popup__overlay"></div>
      </section> */}

    </div>
  );
}

export default App;
