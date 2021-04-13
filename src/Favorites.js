import React from 'react'
import Card from './Card'

export default function Favorites(props) {

    const displayFavorites = () => props.favorites.map(favorite => {
        return <Card key={favorite.id} favorite = {favorite} removeFavorite={props.removeFavorite}/>
    })

    return (
        <div className = 'favorites-container'>
            <div className = 'favorites-heading'>
            { props.favorites.length > 0 ? <h4>Your Knee-Slappers:</h4> : null }
            </div>
            <div className='favorites'>
                {displayFavorites()}
            </div>
            
        </div>
    )
}
