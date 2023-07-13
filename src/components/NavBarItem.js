import React from 'react'

function NavBarItem({name, fa_icon, active}) {
  return (
    <>
        <div className={active?'nav-item active':'nav-item'}>
            <i className={`fa-solid ${fa_icon}`}></i>
            <p>{name}</p>
        </div>
    </>
    
  )
}

export default NavBarItem