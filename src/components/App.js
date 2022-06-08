import React from 'react';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
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
  const [cards, setCards] = React.useState([]);


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

  function handleUpdateUser({ name, about }) {
    api.updateUserInfo({ name, about })
      .finally(() => {
        closeAllPopups();
      });
    // api.updateUserInfo({})
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateProfileAvatar({ avatar })
      .finally(() => {
        closeAllPopups();
      });
    // console.log('ava')
  }




  React.useEffect(() => {
    api.getPageData()
      .then(([cardsData, userData]) => {
        setCards(cardsData);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  // console.log(cards)



  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.deleteCardLike(card._id)
        .then((data) => {
          setCards((state) => state.map((c) => c._id === card._id ? data : c));
        })
        .catch((err) => { console.error(err); });
    } else {
      api.addCardLike(card._id)
        .then((data) => {
          setCards((state) => state.map((c) => c._id === card._id ? data : c));
        })
        .catch((err) => { console.error(err); });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((data) => {
        console.log('del')
        setCards((state) => state.filter((c) => c._id !== card._id && c));
      })
      .catch((err) => { console.error(err); })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Main
          onCardClick={setSelectedCard}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          cards={cards} />
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />
        <AddPlacePopup
          // onUpdateAvatar={handleUpdateAvatar}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} />
        {/* <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          name="popup-user"
          title="Редактировать профиль" >
          <input id="popup__username" type="text" className="popup__input" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className="popup__username-error popup__input-error"></span>
          <input id="popup__user-about" type="text" className="popup__input" name="about" placeholder="О себе.." required minLength={2} maxLength={40} />
          <span className="popup__user-about-error popup__input-error"></span>
        </PopupWithForm> */}

        {/* <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Изменить"
          name="update-avatar"
          title="Обновить аватар" >
          <input id="popup__avatar-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__avatar-link-error popup__input-error"></span>
        </PopupWithForm> */}
        {/* <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          name="popup-create"
          title="Новое место" >
          <input id="popup__place-name" type="text" className="popup__input" name="name" placeholder="Название" minLength={2} maxLength={30} required />
          <span className="popup__place-name-error popup__input-error"></span>
          <input id="popup__place-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__place-link-error popup__input-error"></span>
        </PopupWithForm> */}


      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
