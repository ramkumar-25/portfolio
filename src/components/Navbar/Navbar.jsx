import React, { useRef, useState } from 'react'
import "./Navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_icon from "../../assets/menu-icon.png"
import close_icon from "../../assets/white-close-icon-png-8.png"

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
 
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }
 

  return (
    <div className='navbar'>
        <h1>Ramkumar</h1>
        <img src={menu_icon} alt="" className='menu-icon' onClick={openMenu} />
        <div className="menu-list">
            <ul ref={menuRef}>
              <img src={close_icon} alt="close icon" onClick={closeMenu} className='close-icon' />
                <li><AnchorLink  className="anchor-link"  href="#home"><p >Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p>About me</p></AnchorLink></li>
                <li><AnchorLink  className="anchor-link" offset={50} href="#skills"><p >Skills</p></AnchorLink></li>
                <li><AnchorLink  className="anchor-link" offset={50} href="#project"><p>Projects</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p >Contact</p></AnchorLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar