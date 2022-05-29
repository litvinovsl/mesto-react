import React from 'react';
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
    setSelectedCard(null);
  }

  return (
    <div>
      <Header />
      <Main onCardClick={setSelectedCard} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="popup-user" title="Редактировать профиль" children={
        <>
          <input id="popup__username" type="text" className="popup__input" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className="popup__username-error popup__input-error"></span>
          <input id="popup__user-about" type="text" className="popup__input" name="about" placeholder="О себе.." required minLength={2} maxLength={40} />
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
          <input id="popup__place-name" type="text" className="popup__input" name="name" placeholder="Название" minLength={2} maxLength={30} required />
          <span className="popup__place-name-error popup__input-error"></span>
          <input id="popup__place-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__place-link-error popup__input-error"></span>
        </>
      } />


    </div>
  );
}

export default App;
