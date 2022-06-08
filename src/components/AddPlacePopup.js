import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);


    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Сохранить"
            name="popup-create"
            title="Новое место" >
            <input id="popup__place-name" type="text" className="popup__input" name="name" placeholder="Название" minLength={2} maxLength={30} required />
            <span className="popup__place-name-error popup__input-error"></span>
            <input id="popup__place-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__place-link-error popup__input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;