import React from 'react'
import "../router/routerfile.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../compontes/Home';
import About from "../compontes/about";
import Contact from "../compontes/contact";
import Education from "../compontes/education";
import Footer from "../compontes/Footer";

import Projects from "../compontes/Projects";
import Skill from "../compontes/skill";
import Navbar1 from '../compontes/Navbar1';

export const Routerfile1 = () => {
    return (
        <BrowserRouter>
            <div className="navfix">
                <Navbar1 />
            </div >
            <div className='container'>
                <div className='homeroter'>
                    <Home />
                </div>

                <div className='pages'>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/Education" element={<Education />} />
                        <Route path="/project" element={<Projects />} />
                        <Route path="/Contact" element={<Contact/>} />
                    </Routes>
                </div>

            </div>

        </BrowserRouter>
    )
}
