import React,{useState}from 'react'
import "../styles/navbar.css"
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../img/logo1.png'
const Navbar1 = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuclose = () => {
    setIsOpen(false); 
  };
  return (
    <div className="navbar">
      {/* <div className='navbrand'>
      <img src={logo} alt="logo" height="45" width="50" />
      </div> */}
      {/* <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} color="#007AFF" /> : <FaBars size={30} color="#007AFF" />}
      </div> */}
      <ul className={`nav-list `}>
        <li className="nav-item"><a href="/" onClick={menuclose}>About me</a></li>
        <li className="nav-item"><a href="/Education" onClick={menuclose}>resume</a></li>
        {/* <li className="nav-item"><a href="#skill"onClick={menuclose}>Skill</a></li> */}
        <li className="nav-item"><a href="/project"onClick={menuclose}>Projects</a></li>
        <li className="nav-item"><a href="/Contact"onClick={menuclose}>Contact</a></li>
      </ul>
    </div>


  )
}
export default Navbar1