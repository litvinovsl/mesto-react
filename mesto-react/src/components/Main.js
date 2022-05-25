import React from 'react';
import avatarEditButt from '../images/Avatar-edit.svg';
import buttomEdit from '../images/buttom-edit.svg';
import buttomPlus from '../images/buttom-plus.svg';

function Main(props) {


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button" title="Изменить аватар">
                        <img className="profile__avatar" src={avatarEditButt} alt="аватар" />
                    </button>
                    <div className="profile__user">
                        <div className="profile__user-name-edit">
                            <h1 className="profile__username">Жак-Ив-Кусто</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-butt">
                                <img className="profile__edit-butt-img" src={buttomEdit} alt="редактировать" />
                            </button>
                        </div>
                        <p className="profile__about-user">Исследователь океанов</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button">
                    <img className="profile__add-button-img" src={buttomPlus} alt="добавить картинку" />
                </button>
            </section>
            <section className="elements">

            </section>
            <template id="card-template">
                <div className="element">
                    <button type="button" className="element__delete"></button>
                    <img className="element__image" src="#" alt="картинка" />
                    <p className="element__name"></p>
                    <div className="element__counter-and-like">
                        <button type="button" className="element__like"></button>
                        <p className="element__like-counter">0</p>
                    </div>
                </div>
            </template>
        </main>
    );
}

export default Main;