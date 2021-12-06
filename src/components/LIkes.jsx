/*
import React from "react";

function Likes(props) {
    const { likes, target, isOver } = props;

    const likesRef = React.createRef();
    const position = React.useMousePosition();
    const selfLike = likes.some((item) => item._id === target) ? "you " : "";
    const [likesUpdated, setLikesUpdated] = React.useState();


    const renderLike = (like) => {
        if (like._id !== target)
            return (<div className="elements__likes-container">
                <button type="button" className="elements__like-button" aria-label="like button"></button>
                <p className="element__like-counter"></p>
            </div>)
    }
}

export default Likes;
*/