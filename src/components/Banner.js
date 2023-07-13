import React from 'react'
import './Banner.css';

function Banner() {
  return (
    <div className='ui-banner-container'>
        <h1 className='ui-banner-title'>Just for you</h1>
        
        <div className='ui-banner'>
            <div className='ui-banner-caption'>
                <div className='ui-caption'>
                    <h3 className='margin-none white'>Gregory Coffee</h3>
                    <p className='margin-none grey thick'>100 Wall St.</p>
                    <p className='darkergrey'>1 min walk</p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Banner