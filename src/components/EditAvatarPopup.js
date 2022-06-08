import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Изменить"
            name="update-avatar"
            title="Обновить аватар" >
            <input id="popup__avatar-link" type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__avatar-link-error popup__input-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;