import React from 'react'

export default function Card(props) {

    const handleClick = (event) => {
        props.removeFavorite(props.favorite)
    }

    return (
        <div className = 'card animate__animated animate__lightSpeedInLeft' onClick={handleClick}>
            <h5>Q: {props.favorite.setup}</h5>
            <h5>A: {props.favorite.punchline}</h5>
        </div>
    )
}
