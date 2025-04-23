import React from 'react';
import '../styles/education.css'
import Skill from './skill';
// import resume from "./s.praveen.pdf"
import resume from "./Praveen S.pdf"

const Education = () => {
    return (

        <div className='edumain1'>
            <h1>Education</h1>
            <br />
            <div className='donbnt'>
           <a href={resume} download="praveen.pdf">GET CV</a>

        </div>
        <br />
            <div className='edu'>
                <div className='educollage'>
                    <p className='class1'>Engineering </p>
                    <p className='year1'>2020-2024</p>

                    <p className='nameini'> Sethu Institute of
                        Technology</p>
                    <p className='place'>Madurai ,TamilNadu</p>

                    <p className='class2'> Bachelor of Enginnering(Computer
                        Science and
                        Engineering) with aggregate of 76.6%(CGPA)</p>
                </div>
                <div className='eduDiploma '>
                    <p className='class1'>Diploma</p>
                    <p className='year1'>2017-2019</p>

                    <p className='nameini'> Tamil Nadu Polytechnic College
                    </p>
                    <p className='place'>Madurai ,TamilNadu</p>

                    <p className='class2'>Diploma In Computer
                        Science and Engineering  with aggregate of 72.2%
                    </p>
                </div>
                <div className='eduschool'>
                    <p className='class1'>X std</p>
                    <p className='year1'>2016 - 2017</p>

                    <p className='nameini'> Balamandiram hr
                        sec school</p>
                    <p className='place'>Madurai ,TamilNadu</p>



                    <p className='class2'>Completed S.S.L.C with an aggregate of 78%.</p>

                </div>
            </div>
           <Skill/>
        </div>



    )
}

export default Education