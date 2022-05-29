import React from 'react';

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
      }

    return (
        <div key={props.props.key} className="element">
            <button type="button" className="element__delete"></button>
            <img className="element__image" onClick={handleCardClick} src={props.props.link} alt={props.props.name} />
            <p className="element__name">{props.props.name}</p>
            <div className="element__counter-and-like">
                <button type="button" className="element__like"></button>
                <p className="element__like-counter">{props.props.likes.length}</p>
            </div>
        </div>
    );

}

export default Card;