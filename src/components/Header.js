import React, { Component } from 'react';
import { motion } from 'framer-motion';
export default class Header extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<React.Fragment>
<motion.header id="home" initial={{ opacity : 0}} animate={{ opacity: 1}} transition={{ duration: 2 }} exit={{ x: -300, opacity: 0 }}>
    <nav id="nav-wrap" className='fixed w-full text-center text-transform: uppercase;'>
        <ul>
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
    </nav>
</motion.header>
</React.Fragment>
);
}
}