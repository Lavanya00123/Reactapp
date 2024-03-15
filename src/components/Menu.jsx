import React from 'react'
import './Menu.css'
const Menu = () => {
  return (
    <div>
      
      <ul className='nav-container'>
      <img src="https://mobirise.com/extensions/ideam5/saas-design-tool/assets/images/logo.png" alt="idema" height="16px" width="32px" className='list-container'></img> 
        <li className='list-container'>IdeaM5</li>
        <li className='list-container'>Teams</li>
        <li className='list-container'>ShowCase</li>
        <li className='list-container'>Developers</li>
        <li className='list-container'>Resources</li>
        <li className='list-container'>Blog</li>
        <li className='list-container'>Pricing</li>
        <div className='button-container'>
        <button className='signup-button'>Sign up for free</button>
        </div>
    </ul>
    </div>
  )
}

export default Menu
