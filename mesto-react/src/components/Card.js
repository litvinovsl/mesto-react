import React from 'react';

function Card(props) {
    // console.log(props.props.link);
    // React.useEffect(() => {
    // debugger

        return (
            <div key={props.key} className="element">
                <button type="button" className="element__delete"></button>
                <img className="element__image" src={props.props.link} alt={props.props.name} />
                <p className="element__name">{props.props.name}</p>
                <div className="element__counter-and-like">
                    <button type="button" className="element__like"></button>
                    <p className="element__like-counter">{props.props.likes.length}</p>
                </div>
            </div>
        );
    // })
    
}

export default Card;