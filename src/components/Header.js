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
          className="flex items-center justify-center relative h-screen min-h-[500px] w-full text-white text-center overflow-hidden"
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
            className="tracking-[1.5px] mt-0 mb-0 ml-auto mr-auto mt-5 z-100 top-0 left-0 fixed w-full text-center text-transform: uppercase font-AFont"
          >
            <ul className="min-h-[48px] w-auto nav">
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

          <div className="inline-block w-[90%] max-w-[1020px] text-center mx-auto pb-[30px]">
            <div className="w-full flex items-center flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[90px] leading-tight font-AFont tracking-tight mt-0 mb-6 drop-shadow-xl">
                {resumeData.firstname} <span className="text-AOrange">{resumeData.lastname}</span>
              </h1>

              <h2
                className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto text-center sm:text-left text-base sm:text-lg md:text-xl lg:text-2xl leading-snug"
                style={{ color: '#fff', fontFamily: 'AFont' }}
              >
                Skills & <span className="text-AOrange">Projects</span> in <span className="word"></span>
              </h2>

              <ul className="social flex justify-center space-x-4 mt-4">
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

          {/* Centering the arrow at the bottom of the screen */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <ScrollLink
              className="arrow smoothscroll cursor-pointer"
              to="work"
              smooth={true}
              duration={800}
              spy={true}
            >
              {/* Add arrow icon or text here */}
              <i className="fa fa-arrow-down text-2xl text-AOrange"></i>
            </ScrollLink>
          </div>
        </motion.header>
      </React.Fragment>
    );
  }
}
