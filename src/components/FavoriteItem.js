import React from 'react'
import './Favorites.css';

function FavoriteItem({image, title, est}) {
  return (
    <>
        <div className='item-container'>
            <img src={image}/>
            <h1 className='item-title'>{title}</h1>
            <p className='item-est'>{est}</p>
        </div>
    </>
  )
}

export default FavoriteItem