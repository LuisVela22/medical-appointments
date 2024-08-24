import React from "react";
import './header.css';
import { useState } from 'react';
import menuImage from '../../assets/burger-menu.png';
import medicalTeam from '../../assets/medical-team.png'
import { Link } from "react-router-dom";

interface Link {
  name: string;
  url: string;
}

interface HeaderProps {
  links: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonClassName1 = `navbar-menu ${menuOpen ? 'active' : ''}` 
  
  //const handleMouseItems = () => setOver(!hover)
  const toggleMenu = () =>{
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  } 
  

  //console.log(menuOpen)
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className='imgMenu' src={medicalTeam} style={{marginRight: "10px"}}></img>
        <a href='../../main.tsx'>Inicio</a>
      </div>
      <a className="navbar-toggler" onClick={toggleMenu}>
        <img className='imgMenu' src={menuImage} alt="" />
      </a>
      <div  className={buttonClassName1}>
        {/* <a  href='../../main.tsx' >Home</a>
        <a href="#" >Registrar</a>
        <a href="#" >Acerca de Nosotros</a> */}
        {links.map((link, index) => (
          <a key={index}>
            <Link to={link.url}>{link.name}</Link>
          </a>
        ))}

      </div>
    </nav>
  );
};

export default Header;

