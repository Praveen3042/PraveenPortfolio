import React from 'react'
import '../styles/footer.css'
import {FaGithub, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">Designed and developed by Praveen S </div>
      <div className="center">Copyright © 2024, </div>
      <div className="right">
        <a href="https://github.com/Praveen3042"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/praveen-s-6566b9262/"><FaLinkedin/></a>
      </div>
    </div>
  )
}

export default Footer