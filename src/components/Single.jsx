import React from 'react'
import './Single.css'
const Single = () => {
  return (
    <div>
        <div className='blue-main-container'>
      <div className='blue-container'>
        <h2 style={{color:'white'}}>It's as ease as 1 - 2 - 3!</h2>
        <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div>
        <div className='icon-container' style={{color:'white'}}>
        <i class="fa-solid fa-list-ul"></i>
        <p style={{color:'white'}}>SignUp</p>
        </div>
        <div className='icon-container'>
        <i class="fa-solid fa-list-ul"></i>
        <p style={{color:'white'}}>Add users</p>
        </div>
        <div className='icon-container'>
        <i class="fa-solid fa-list-ul"></i>
        <p style={{color:'white'}}>Asign Task</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Single
