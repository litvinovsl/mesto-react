import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Сохранить"
            name="popup-user"
            title="Редактировать профиль" >
            <input id="popup__username" type="text" className="popup__input" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
            <span className="popup__username-error popup__input-error"></span>
            <input id="popup__user-about" type="text" className="popup__input" name="about" placeholder="О себе.." required minLength={2} maxLength={40} />
            <span className="popup__user-about-error popup__input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;

