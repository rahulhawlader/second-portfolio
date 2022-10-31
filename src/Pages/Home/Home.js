import React from 'react';
import About from '../About/About';
import BennerOne from '../Benner/BennerOne';
import Contack from '../Contack/Contack';
import MyProjects from '../MyProjects/MyProjects';
import MySkill from '../MySkill/MySkill';
import MyServices from '../WhatIDo/MyServices';


const Home = () => {
 return (
  <div id="home">
   <BennerOne/>
   <About/>
   <MyServices/>
   <MySkill/>
   <MyProjects/>
   <Contack/>
   
   
   
  </div>
 );
};

export default Home;