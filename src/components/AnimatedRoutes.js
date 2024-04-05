import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import Work from './Work'
import Research from './Research'

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
    let resumeData = props.resumeData;
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={
      <div className="App">
        <div className="animatedBG">
      <Header resumeData={resumeData}/>
      <Work resumeData={resumeData}/>
      <Research resumeData={resumeData}/>
        </div>
    </div>
    }/>
    </Routes>

    </AnimatePresence>
  );
}

export default AnimatedRoutes;