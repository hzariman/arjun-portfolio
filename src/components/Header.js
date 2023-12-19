import React, { Component } from 'react';
import { motion } from 'framer-motion';
export default class Header extends Component {
render() {
let resumeData = this.props.resumeData;
return (
<React.Fragment>
<motion.header id="home" className='relative h-screen min-h-[500px] w-full bg-[#161415] text-white text-center overflow-hidden' initial={{ opacity : 0}} animate={{ opacity: 1}} transition={{ duration: 2 }} exit={{ x: -300, opacity: 0 }}>
<nav id="nav-wrap" className='tracking-[1.5px] mt-0 mb-0 ml-auto mr-auto z-100 top-0 left-0 fixed w-full text-center text-transform: uppercase font-AFont'>
    <ul className='min-h-[48px] w-auto'>
        <li className="inline-block relative h-[48px] scroll-smooth"><a className="py-[8px] px-[13px]" href="#home">Home</a></li>
        <li className="inline-block relative h-[48px] scroll-smooth"><a className="py-[8px] px-[13px]" href="#about">About</a></li>
        <li className="inline-block relative h-[48px] scroll-smooth"><a className="py-[8px] px-[13px]" href="#resume">Resume</a></li>
        <li className="inline-block relative h-[48px] scroll-smooth"><a className="py-[8px] px-[13px]" href="#portfolio">Works</a></li>
        <li className="inline-block relative h-[48px] scroll-smooth"><a className="py-[8px] px-[13px]" href="#contact">Contact</a></li>
    </ul>
</nav>

<div className="inline-block align-middle w-[85%] text-center my-0 mx-auto w-max-[1020px] pb-[30px]">
<div className="w-full">
<h1 className="text-[90px] leading-[1.5em] font-AFont tracking-[-2px] mt-0 mr-auto mb-[18px] ml-auto drop-shadow-xl">{resumeData.firstname} <span className = "text-AOrange">{resumeData.lastname}</span>.</h1>
<h2 style={{color:'#fff', fontFamily:'AFont'}}>Skills & <span className='text-AOrange'>Projects</span> in <span className="word"></span>
</h2>
<hr/>
{/* <ul className="background">
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul> */}
<ul className="social">
{
resumeData.socialLinks && resumeData.socialLinks.map(item =>{
return(
<li key={item.name}>
<a href={item.url} target=""><i className={item.className}></i></a>
</li>
)
}
)
}
</ul>
</div>
</div>
</motion.header>
</React.Fragment>
);
}
}