import React from 'react'
import './Row.css'
const Row = () => {
  return (
    <div>
      <div className='row-container'>
      <div className='image-container'>
        <img src="https://mobirise.com/extensions/ideam5/saas-design-tool/assets/images/pexels-kevin-ku-577585.jpg" alt="beautiful" height="400px" width="400px" style={{borderRadius:20}}></img>
      </div>
      <div className='paragraph-contaainer'>
        <h2>This is amazing dashboard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud officia deserunt mollit exercitation.</p>
      <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui anim id est laborum.</p>
      <button className='button'>Learn More</button>
      </div>
      </div>
    </div>
  )
}

export default Row
