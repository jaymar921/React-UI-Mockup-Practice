import React from 'react'
import './Profile.css';
import profilePhoto from '../assets/profilephoto.jpg'

function Profile() {
  return (
    <div className='ui-profile-container'>
        <img src={profilePhoto} className='ui-profile-photo'/>
        <p className='ui-profile-dropdown'>Downtown <i className="fa-solid fa-caret-down"></i></p>
    </div>
  )
}

export default Profile