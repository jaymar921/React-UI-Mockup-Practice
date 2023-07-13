import React from 'react'
import './NavBar.css'
import NavBarItem from './NavBarItem'

function NavBar() {
  return (
    <div className='ui-navbar'>
        <NavBarItem name='Home' fa_icon='fa-house' active={true}/>
        <NavBarItem name='Search' fa_icon='fa-magnifying-glass'/>
        <NavBarItem name='Rewards' fa_icon='fa-diamond'/>
        <NavBarItem name='Team' fa_icon='fa-people-group'/>
    </div>
  )
}

export default NavBar