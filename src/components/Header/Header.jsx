import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container paddings flexCenter ">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact us </a>
          <a href="">Get Started</a>
          <button className='button'>
          <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  )
}
