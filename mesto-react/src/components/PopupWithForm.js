import React from 'react';
import closeIcon from '../images/Close-Icon.svg';

// Функциональный компонент User
function PopupWithForm(props) {

    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}` }>
            <div className="popup__container">
                <button id="popup-user-close" onClick={props.onClose} type="button" className="popup__button-close"><img className="popup__button-close-img"
                    src={closeIcon} alt="Закрыть" />
                </button>
                <h2 className="popup__edit-text">{props.title}</h2>
                <form id="form-profile" className="popup__form" name={props.name} action="#" noValidate>
                    <fieldset className="popup__inputs">
                        {props.children}
                        <button className="popup__button-save" type="submit">Сохранить</button>
                    </fieldset>
                </form>
            </div>
            <div id="overlayProfile" onClick={props.onClose} className="popup__overlay"></div>
        </section>
    );
}
// function PopupWithForm() {
//   return (
//     <section id="popup-user" className="popup">
//         <div className="popup__container">
//           <button id="popup-user-close" type="button" className="popup__button-close"><img className="popup__button-close-img"
//             src={closeIcon} alt="Закрыть" />
//           </button>
//           <h2 className="popup__edit-text">Редактировать профиль</h2>
//           <form id="form-profile" className="popup__form" name="profileForm" action="#" novalidate>
//             <fieldset className="popup__inputs">
//               <input id="popup__username" type="text" value="Жак-Ив Кусто" className="popup__input" name="name"
//                 placeholder="Имя" required minlength="2" maxlength="40" />
//               <span className="popup__username-error popup__input-error"></span>
//               <input id="popup__user-about" type="text" value="Исследователь океана" className="popup__input"
//                 name="about" placeholder="О себе.." required minlength="2" maxlength="40" />
//               <span className="popup__user-about-error popup__input-error"></span>
//               <button className="popup__button-save" type="submit">Сохранить</button>
//             </fieldset>
//           </form>
//         </div>
//         <div id="overlayProfile" className="popup__overlay"></div>
//       </section>
//   );
// }

export default PopupWithForm;