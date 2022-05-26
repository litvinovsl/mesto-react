import React from 'react';
import api from '../utils/Api.js';
import Card from './Card'
import buttomEdit from '../images/buttom-edit.svg';
import buttomPlus from '../images/buttom-plus.svg';

function Main(props) {

    const [userName, setUserName] = React.useState('Сергей');
    const [userDescription, setUserDescription] = React.useState('студент');
    const [userAvatar, setUserAvatar] = React.useState('https://st.shanti-shanti.com/p/3b7bc1f6d5858c911044adf913f537b0.jpg');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getPageData()
            .then(([cardsData, userData]) => {
                console.log(cardsData);
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardsData);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button" title="Изменить аватар">
                        <img className="profile__avatar" src={userAvatar} alt="аватар" />
                    </button>
                    <div className="profile__user">
                        <div className="profile__user-name-edit">
                            <h1 className="profile__username">{userName}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-butt">
                                <img className="profile__edit-butt-img" src={buttomEdit} alt="редактировать" />
                            </button>
                        </div>
                        <p className="profile__about-user">{userDescription}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button">
                    <img className="profile__add-button-img" src={buttomPlus} alt="добавить картинку" />
                </button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card key={card._id} props={card} />
                ))}
            </section>

            {/* {cards.map((card, i) => (
                <div key={i} className="element">
                    <button type="button" className="element__delete"></button>
                    <img className="element__image" src={card.link} alt="картинка" />
                    <p className="element__name">{card.name}</p>
                    <div className="element__counter-and-like">
                        <button type="button" className="element__like"></button>
                        <p className="element__like-counter">0</p>
                    </div>
                </div>
            ))} */}

        </main>
    );
}

export default Main;