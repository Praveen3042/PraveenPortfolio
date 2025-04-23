import React from 'react'
import "../styles/home.css"
import my from '../img/my.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import resume from "./s.praveen.pdf"

const Home = () => {
  return (


    <div className='homepage'>
      <img className='myimg' src={my} />
      <div className='homename'>
        <p className='hometitle'>
        {/* <h1>This is</h1> */}
        <h1>Praveen S</h1>
        </p>
      
        <div className='homedevp'>
          <span></span>
        </div>
        <br />
        <br />
        <div className='homeicon'>
          <a href='https://github.com/Praveen3042' target='_blank' >
            <FaGithub />
          </a>
          &nbsp;&nbsp;
          {/* <a href='' target='_blank' >
          <IoMail />
          </a> */}
          &nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/praveen-s-6566b9262/' target='_blank' >
            <FaLinkedin />
          </a>

        </div>
        <br />
        
      </div>


    </div>



  )
}

export default Home