import React from 'react';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setСurrentUser] = React.useState({
    name: "",
    about: ""
  });

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        // console.log('userinfo: ', data);
        setСurrentUser(data);
        // console.log('current: ', currentUser)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  // console.log('current: ', currentUser);

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
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Main
          onCardClick={setSelectedCard}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          name="popup-user"
          title="Редактировать профиль" >
          <input id="popup__username" type="text" className="popup__input" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className="popup__username-error popup__input-error"></span>
          <input id="popup__user-about" type="text" className="popup__input" name="about" placeholder="О себе.." required minLength={2} maxLength={40} />
          <span className="popup__user-about-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Изменить"
          name="update-avatar"
          title="Обновить аватар" >
          <input id="popup__avatar-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__avatar-link-error popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          name="popup-create"
          title="Новое место" >
          <input id="popup__place-name" type="text" className="popup__input" name="name" placeholder="Название" minLength={2} maxLength={30} required />
          <span className="popup__place-name-error popup__input-error"></span>
          <input id="popup__place-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__place-link-error popup__input-error"></span>
        </PopupWithForm>


      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
