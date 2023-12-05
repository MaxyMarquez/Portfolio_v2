import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About';
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    const sectionIds = ['about', 'skills', 'projects', 'contact'];
    return (
        <>
            <div className='px-10 lg:px-20 lg:grid lg:grid-cols-2 lg:grid-rows-1'>
                <div>
                    <Navbar targetIds={sectionIds} />
                </div>
                <div className='grid place-content-center'>
                    <div id='about'>
                        <About />
                    </div>
                    <div id='skills'>
                        <Skills />
                    </div>
                    <div id='projects'>
                        <Projects />
                    </div>
                    <div id='contact'>
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home