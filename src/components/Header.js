import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <motion.header
          id="home"
          className='flex items-center justify-center relative h-screen min-h-[500px] w-full text-white text-center overflow-hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <div className="bg-animation">
            <div id="stars"></div>
          </div>
          <nav
            id="nav-wrap"
            className='tracking-[1.5px] mt-0 mb-0 ml-auto mr-auto mt-5 z-100 top-0 left-0 fixed w-full text-center text-transform: uppercase font-AFont'
          >
            <ul className='min-h-[48px] w-auto nav'>
              <li className="inline-block relative h-[48px] home current">
                <ScrollLink
                  className="py-[8px] px-[13px] transition-bg duration-150 ease-in hover:text-AOrange cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="inline-block relative h-[48px] work">
                <ScrollLink
                  className="py-[8px] px-[13px] transition-bg duration-150 ease-in hover:text-AOrange cursor-pointer"
                  to="work"
                  smooth={true}
                  duration={800}
                  spy={true}
                >
                  Work
                </ScrollLink>
              </li>
              <li className="inline-block relative h-[48px] research">
                <ScrollLink
                  className="py-[8px] px-[13px] transition-bg duration-150 ease-in hover:text-AOrange cursor-pointer"
                  to="research"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70}
                >
                  Research
                </ScrollLink>
              </li>
              <li className="inline-block relative h-[48px] projects">
                <ScrollLink
                  className="py-[8px] px-[13px] transition-bg duration-150 ease-in hover:text-AOrange cursor-pointer"
                  to="projects"
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70}
                >
                  Projects
                </ScrollLink>
              </li>
            </ul>
          </nav>

          <div className="inline-block w-[85%] text-center my-0 mx-auto w-max-[1020px] pb-[30px]">
            <div className="w-full flex items-center flex-col">
              <h1 className="text-sm md:text-[90px] sm:text-[78px] leading-[1.5em] font-AFont tracking-[-2px] mt-0 mr-auto mb-[18px] ml-auto drop-shadow-xl">
                {resumeData.firstname} <span className="text-AOrange">{resumeData.lastname}</span>
              </h1>
              <h2
                className="w-[40%] ml-auto mr-auto pl-[2%] text-left text-sm md:text-[1.5em] sm:text-[1em] leading-[1.5em]"
                style={{ color: '#fff', fontFamily: 'AFont', float: 'left' }}
              >
                Skills & <span className='text-AOrange'>Projects</span> in <span className="word"></span>
              </h2>
              <ul className="social">
                {resumeData.socialLinks && resumeData.socialLinks.map(item => (
                  <li key={item.name}>
                    <a href={item.url} target="">
                      <i className={item.className}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ScrollLink className='arrow smoothscroll cursor-pointer' to='work' smooth={true} duration={800} spy={true}>
            {/* Add arrow icon or text here */}
          </ScrollLink>
        </motion.header>
      </React.Fragment>
    );
  }
}
