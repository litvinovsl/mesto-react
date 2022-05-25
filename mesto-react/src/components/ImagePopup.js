import React from 'react';
import closeIcon from '../images/Close-Icon.svg';


function ImagePopup() {
    return (
        <section id="popup-card" className="popup">
            <div className="popup__open-place">
                <button id="popup-closeCard" type="button" className="popup__button-close"><img className="popup__button-close-img"
                    src={closeIcon} alt="Закрыть" />
                </button>
                <img className="popup__image" src="#" alt="картинка" />
                <p className="popup__img-name"></p>
            </div>
            <div id="overlayOpenCard" className="popup__overlay"></div>
        </section>
    );
}

export default ImagePopup;