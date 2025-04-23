import React from 'react'
import Procard from './cards/Procard'
import ox from '../img/xogame.jpeg'
import tap from '../img/tap.png'
import v from '../img/v_packs.png'
import ET from '../img/et1.jpg'
import '../styles/style.css'

const Projects = () => {
  return (

    <div className='projectmain1'>
      <h1>Projects</h1>
      <br />
      <div className='project'>
        <Procard
          imageSrc={v}
          title="V packs"
          altText="img of websit"
          description="Developed a responsive static website using React.js and CSS, ensuring optimal performance and cross-device compatibility"
          demoLink="https://vpacks.net/"
        />
        <Procard
          imageSrc={ox}
          title="XO Game"
          altText="img of websit"
          description="Built with HTML, CSS, and JavaScript, this simple OX game adds fun by including special rules like extra points for diagonal wins."
          githubLink="https://github.com/Praveen3042/xo-game"
          demoLink="https://praveen3042.github.io/xo-game/"
        />
        <Procard
          imageSrc={tap}
          title="The Automation People"
          altText="img of websit"
          description="Built with React.js, this website performs CRUD operations using Firebase Cloud as the backend."
          demoLink="https://the-automation-people.web.app/"
        />

        <Procard
          imageSrc={ET}
          title="Expense Tracke"
          altText="img of websit"
          description="Developed a full-stack web application using the MERN stack, implementing CRUD operations with MongoDB Atlas for the backend. Ensured responsiveness with a mobile-friendly design."
          demoLink="https://expense-tracker-966c0.web.app/"
        />

      </div>



    </div>



  )
}

export default Projects