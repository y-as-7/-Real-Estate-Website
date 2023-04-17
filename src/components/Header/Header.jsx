import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react';
export const Header = () => {
  const[menuOpened,setMenuOpened]=useState(false)
  const getMeunStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return{
        right:!menuOpened && "-100%"
      }
    }
  }
  return (
    <section className="h-wrapper">
      <div className="h-container paddings flexCenter ">
        <img src="./logo.png" alt="logo" width={100} />
        
        <OutsideClickHandler 
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}
        >


        <div className="flexCenter h-menu" style={getMeunStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact us </a>
          <a href="">Get Started</a>
          <button className='button'>
          <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>
      
    </section>
  )
}
