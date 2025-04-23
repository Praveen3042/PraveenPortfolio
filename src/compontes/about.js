import React from 'react'
import "../styles/about.css"
import web from '../img/wed.webp'
import ui from '../img/uiux.webp'
import ed from '../img/editer.webp'


const about = () => {
    return (
           
            <div className='aboutmain1'>
            <h1>About Me</h1>
            <br/>
            <div className='about'> 
                <div className='aboutcon'>
                    <div className='aboutme'>
                        <p>   I am a Professional FullStack Developer</p>
                        <br/>
                        <p className='p2'>Motivated and detail-oriented recent graduate specializing in MERN Full Stack Development. Skilled in building Scalable and high-performance web applications with a solid understanding of both front-end and back-end development.</p>
                        <br/>
                        <hr className='line'/>
                        <br/>
                        <div className='p2'>
                            <p>Email:praveen30042000@gmail.com   <br/> Phone no:9489826549</p>
                        </div>
                    </div>
                    
                    <div className='aboutimg'>
                        <h1>Focused On</h1>
                        <div className='focusedm'>
                            <div className='focused1'>
                                <img src={web}/> 
                                <div>
                                <div className='fname'> web development</div>
                                <br/>
                                <div className='fpre'>The most modern and high-quality web development crafted at a professional level.</div>

                                </div>
                                
                            </div>
                            <div className='focused1'>

                            <img src={ui}/> 
                                <div>
                                <div className='fname'>ui/ux</div>
                                <br/>
                                <div className='fpre'>The most modern and high-quality UI/UX design, crafted at a professional level.</div>

                                </div>
                            </div>
                            <div className='focused1'>
                            <img src={ed}/> 
                                <div>
                                <div className='fname'> Video Editing </div>
                                <br/>
                                <div className='fpre'>The most modern and high-quality video editing, crafted at a professional level.</div>

                                </div>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>
                
            </div>
            

    )
}

export default about