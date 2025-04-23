import React from 'react'
import '../styles/skill.css'
import mysql1 from '../img/skill/mysql.png'
import github1 from '../img/skill/github.png'
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCss3, SiMongodb, SiExpress } from "react-icons/si";
import Imgbutton from '../button1/Imgbutton';

const Skill = () => {
    return (

        <div className='skillmain1'>
            <h1>skills</h1>
           
            <br />
            <div className='skill'>
                <div className='skill1'>
                <h1>Front-End</h1>
                <br/>
                    <div className='skillicon'>
                        <Imgbutton
                            imgSrc="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                            altText="Button Icon"
                            label="HTML"
                        />
                         <Imgbutton
                            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
                            altText="Button Icon"
                            label="CSS"
                        />
                         <Imgbutton
                            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                            altText="Button Icon"
                            label="javascript"
                        />
                         <Imgbutton
                            imgSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                            altText="Button Icon"
                            label="React JS"
                        />
                         <Imgbutton
                            imgSrc="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                            altText="Button Icon"
                            label="Redux"
                        />
                         <Imgbutton
                            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
                            altText="Button Icon"
                            label="Sass"
                        />

                    </div>
                </div>
            </div>
            <br />
            <div className='skill'>
                <div className='skill1'>
                <h1>Back-End</h1>
                <br/>
                    <div className='skillicon'>
                        <Imgbutton
                            imgSrc="https://cdn-icons-png.flaticon.com/512/3161/3161158.png"
                            altText="Button Icon"
                            label="SQL"
                        />
                         <Imgbutton
                            imgSrc={mysql1}
                            altText="Button Icon"
                            label="Mysql"
                        />
                         <Imgbutton
                            imgSrc="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                            altText="Button Icon"
                            label="MongoDB"
                        />
                    </div>
                </div>
            </div>
            <br />
            <div className='skill'>
                <div className='skill1'>
                <h1>Others</h1>
                <br/>
                    <div className='skillicon'>
                        <Imgbutton
                            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                            altText="Button Icon"
                            label="Git"
                        />
                         <Imgbutton
                            imgSrc={github1}
                            altText="Button Icon"
                            label="Github"
                        />
                         <Imgbutton
                            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
                            altText="Button Icon"
                            label="VS code"
                        />
                        
                
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Skill

//the progreebar 




