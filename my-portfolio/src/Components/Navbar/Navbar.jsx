import React, {useRef} from 'react';
import'./Navbar.css';
import logo from '../../assets/H-logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import hamburger_menu from '../../assets/hamburger_menu.svg';
import menu_close from'../../assets/menu_close.svg';
const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img src={logo} alt ="Logo" />
      </div>
      <img src={hamburger_menu} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
    </div>
  )
}

export default Navbar
