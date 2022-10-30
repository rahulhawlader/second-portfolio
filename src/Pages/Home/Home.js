import React from 'react';
import About from '../About/About';
import BennerOne from '../Benner/BennerOne';
import Contack from '../Contack/Contack';
import MyProjects from '../MyProjects/MyProjects';
import MyServices from '../WhatIDo/MyServices';


const Home = () => {
 return (
  <div>
   <BennerOne/>
   <About/>
   <MyServices/>
   <MyProjects/>
   <Contack/>
   
   
   
  </div>
 );
};

export default Home;