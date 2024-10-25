import React, { useState, useRef} from 'react'
import './Navbar.css'
import Anchorlink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/image/tom-high-resolution-logo-white.png'
// import underlineimages from '../../assets/image/icons8-underline-30.png'
import menu_open from '../../assets/icons/icons8-menu-50.png'
import menu_close from '../../assets/icons/icons8-close-window-50.png'




const Navbar = () => {
const [menu,setMenu] = useState("home")
const menuRef=useRef();
const openMenu=()=>{
  menuRef.current.style.right="0"
}
const Closemenu=()=>{
  menuRef.current.style.right="-350px"
}

  return (
    <div className='navbar'>
      <img src={logo}  className='logo'  alt="" />
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
      <ul ref={menuRef} className=' nav-menu'>
        <img src={menu_close} onClick={Closemenu} className='nav-mob-close' alt="" />
        <li className={menu==="home"?"active":""}><Anchorlink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></Anchorlink></li>
        <li className={menu==="about"?"active":""}><Anchorlink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></Anchorlink></li>
        <li className={menu==="services"?"active":""}><Anchorlink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></Anchorlink></li>
        <li className={menu==="portfolio"?"active":""}><Anchorlink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></Anchorlink></li>
        <li className={menu==="contact"?"active":""}><Anchorlink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></Anchorlink></li>
      </ul>
      <div className="nav-connect"><Anchorlink className='anchor-link' offset={50} href='#contact'>Connect With Me</Anchorlink></div>
    </div>
  )
}

export default Navbar
