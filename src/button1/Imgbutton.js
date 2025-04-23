import React from 'react'
import "../button1/imgbutton.css"


const Imgbutton= ({ imgSrc, altText, label, onClick })=>{
  return (
    <button className="image-button" onClick={onClick}>
      <img src={imgSrc} alt={altText} className="button-image" />
      <span className="button-label">{label}</span>
    </button>
  )
}

export default Imgbutton