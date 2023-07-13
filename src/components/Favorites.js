import React from 'react'
import './Favorites.css'
import FavoriteItem from './FavoriteItem'
import item1 from '../assets/item1.jpg';
import item2 from '../assets/banner.jpg';
import item3 from '../assets/item2.jpg';
import item4 from '../assets/item3.webp';

function Favorites() {
  return (
    <div>
        <div className='favorite-title'>
            <h3 className='title'>Your favorites</h3>
            <i className='fa-solid fa-edit ui-edit'></i>
        </div>
        <div className='item-super-container'>
            <FavoriteItem image={item1} title='Xerxes Cafe' est='3 mins walk'/>
            <FavoriteItem image={item2} title='Gregory Coffee' est='1 min walk'/>
            <FavoriteItem image={item3} title="Pia's Restaurant" est='2 mins walk'/>
            <FavoriteItem image={item4} title='Rey Bean Pizza' est='8 mins walk'/>
        </div>
        
    </div>
  )
}

export default Favorites