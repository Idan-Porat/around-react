import { useEffect, useState } from "react"
import { api } from './Main.jsx';

function Card(props) {

    const { cardClickHandler, onDeleteImagePopupOpen } = props;

    const [cards, setCards] = useState([]);
    useEffect(() => {
        api.getInitialCards()
            .then(res => {
                setCards(res)
            })
    }, []);

    return (
        <>
            {
                cards.map(card => (
                    <il className="elements__card" key={card._id}>
                        <button type="button" onClick={() => onDeleteImagePopupOpen(card)} className="elements__delete-button" aria-label="delete button"></button>
                        <div className="elements__pic" onClick={() => cardClickHandler(card)} style={{ backgroundImage: `url(${card.link})` }} alt={card.name}></div>
                        <div className="elements__inner-container">
                            <h2 className="elements__title">{card.name}</h2>
                            <div className="elements__likes-container">
                                <button type="button" className="elements__like-button" aria-label="like button"></button>
                                <p className="element__like-counter">{card.likes.length}</p>
                            </div>
                        </div>
                    </il>

                ))
            }

        </>
    )
}

export default Card;

