import React from 'react'
import './procard.css'

const Procard = ({ imageSrc, altText, title, description, githubLink, demoLink }) => {
    return (
      <div className="card">
        <img src={imageSrc} alt={altText} height="200" width="150" />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="links">
            <a href={githubLink}>
              <i className="fab fa-github"></i>
              Github
            </a>
            <a href={demoLink}>
              <i className="fas fa-desktop"></i>
              Demo
            </a>
          </div>
        </div>
      </div>
  )
}

export default Procard