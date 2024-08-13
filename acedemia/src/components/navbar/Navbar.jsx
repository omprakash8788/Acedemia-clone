import { useEffect, useState } from 'react';
import './navbar.css'
import { BiLogoEdge } from "react-icons/bi";
import {Link} from 'react-scroll'
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
  const [sticy, setSticky]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>50 ? setSticky(true) :setSticky(false);
    })

  },[])

  const [mobileMenu, setMobileMenu]=useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticy ? 'dark-nav':""}`}>
    <BiLogoEdge className='logo'/>
    <ul className={mobileMenu ? '':"hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>

    </ul>
    <CgMenuRound className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
